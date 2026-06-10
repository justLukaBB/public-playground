<?php
/**
 * Termin-Formular-Handler für Hürland Hausverwaltung (statische Seite auf All-Inkl).
 *
 * Empfängt die JSON-Daten vom /termin-Formular, sendet eine E-Mail an das Büro
 * und eine Bestätigung an den Interessenten. Antwortet im selben JSON-Format,
 * das das Formular (src/components/termin-form.tsx) erwartet: { ok: true } bzw.
 * { error: "..." } mit passendem HTTP-Status.
 */

header("Content-Type: application/json; charset=utf-8");

// --- Konfiguration ---------------------------------------------------------
$EMPFAENGER   = "info@huerland-hausverwaltung.de";          // Büro-Postfach
$ABSENDER      = "info@huerland-hausverwaltung.de";          // muss ein echtes Domain-Postfach sein (SPF/All-Inkl)
$ABSENDER_NAME = "Hürland Hausverwaltung – Webseite";

// --- Nur POST zulassen -----------------------------------------------------
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Methode nicht erlaubt."]);
    exit;
}

// --- Eingaben lesen (JSON, mit Fallback auf Formular-POST) ------------------
$raw  = file_get_contents("php://input");
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

function feld($data, $key) {
    return isset($data[$key]) ? trim((string) $data[$key]) : "";
}

$name    = feld($data, "name");
$email   = feld($data, "email");
$telefon = feld($data, "telefon");
$thema   = feld($data, "thema");
$datum   = feld($data, "datum");
$uhrzeit = feld($data, "uhrzeit");
$grund   = feld($data, "grund");

// --- Validierung -----------------------------------------------------------
if ($name === "" || $email === "" || $grund === "" || $datum === "" || $uhrzeit === "") {
    http_response_code(400);
    echo json_encode(["error" => "Bitte alle Pflichtfelder ausfüllen."]);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Bitte eine gültige E-Mail-Adresse angeben."]);
    exit;
}

// Schutz gegen Header-Injection (Zeilenumbrüche aus Kopf-Feldern entfernen)
$clean = function ($s) {
    return str_replace(["\r", "\n", "%0a", "%0d"], " ", $s);
};
$name  = $clean($name);
$email = $clean($email);

// Datum lesbar machen (YYYY-MM-DD -> DD.MM.YYYY)
$datumLesbar = $datum;
if (preg_match('/^(\d{4})-(\d{2})-(\d{2})$/', $datum, $m)) {
    $datumLesbar = $m[3] . "." . $m[2] . "." . $m[1];
}

// --- Nachricht ans Büro ----------------------------------------------------
$betreff = "Neue Terminanfrage über die Webseite";

$body  = "Neue Terminanfrage über huerland-hausverwaltung.de\n";
$body .= "----------------------------------------------------\n\n";
$body .= "Name:        " . $name . "\n";
$body .= "E-Mail:      " . $email . "\n";
if ($telefon !== "") { $body .= "Telefon:     " . $telefon . "\n"; }
if ($thema   !== "") { $body .= "Thema:       " . $thema . "\n"; }
$body .= "Wunschtermin: " . $datumLesbar . " um " . $uhrzeit . " Uhr\n\n";
$body .= "Nachricht:\n" . $grund . "\n";

$mimeName = "=?UTF-8?B?" . base64_encode($ABSENDER_NAME) . "?=";
$headers  = "From: " . $mimeName . " <" . $ABSENDER . ">\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$betreffEnc = "=?UTF-8?B?" . base64_encode($betreff) . "?=";

$gesendet = @mail(
    $EMPFAENGER,
    $betreffEnc,
    $body,
    $headers,
    "-f " . $ABSENDER
);

if (!$gesendet) {
    http_response_code(502);
    echo json_encode([
        "error" => "Die Anfrage konnte nicht versendet werden. Bitte rufen Sie uns an: 02362/9930550."
    ]);
    exit;
}

// --- Bestätigung an den Interessenten (Best-Effort, Fehler ignorieren) -----
$bestBetreff = "=?UTF-8?B?" . base64_encode("Ihre Terminanfrage bei der Hürland Hausverwaltung") . "?=";
$bestBody  = "Guten Tag " . $name . ",\n\n";
$bestBody .= "vielen Dank für Ihre Terminanfrage. Wir haben folgende Angaben erhalten:\n\n";
$bestBody .= "Wunschtermin: " . $datumLesbar . " um " . $uhrzeit . " Uhr\n";
if ($thema !== "") { $bestBody .= "Thema:        " . $thema . "\n"; }
$bestBody .= "\nWir prüfen Ihren Wunschtermin und melden uns kurzfristig bei Ihnen.\n\n";
$bestBody .= "Mit freundlichen Grüßen\n";
$bestBody .= "Hürland-Scuric Immobilien GmbH\n";
$bestBody .= "Ostwall 42, 46282 Dorsten\n";
$bestBody .= "Tel. 02362/9930550\n";

@mail($email, $bestBetreff, $bestBody, $headers, "-f " . $ABSENDER);

// --- Erfolg ----------------------------------------------------------------
echo json_encode(["ok" => true]);
