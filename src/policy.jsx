const CONTACT = "TelemetryApp@gmail.com";

function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ContactLink() {
  return <a href={`mailto:${CONTACT}`}>{CONTACT}</a>;
}

export function PolicyShell({
  language,
  title,
  effective,
  alternateHref,
  alternateLabel,
  children
}) {
  return (
    <main>
      <article lang={language}>
        <header>
          <div className="brandRow">
            <span className="mark" aria-hidden="true">D</span>
            <span className="brand">DataOverlay</span>
          </div>
          <p className="eyebrow">PRIVACY • TRANSPARENCY • LOCAL PROCESSING</p>
          <h1>{title}</h1>
          <div className="metaRow">
            <p className="effective">{effective}</p>
            <a className="language" href={alternateHref}>{alternateLabel}</a>
          </div>
        </header>
        <div className="content">{children}</div>
      </article>
      <footer>
        <span>DataOverlay</span>
        <span>•</span>
        <ContactLink />
      </footer>
    </main>
  );
}

export function EnglishPolicy() {
  return (
    <PolicyShell
      language="en"
      title="Privacy Policy"
      effective="Effective date: July 28, 2026"
      alternateHref="./pl/"
      alternateLabel="Wersja polska"
    >
      <p className="lead">
        DataOverlay is an Android video telemetry editor and recorder. This
        policy explains what the app processes, what may leave the device, and
        the controls available to the user.
      </p>

      <div className="notice">
        <strong>Plain-language summary.</strong> Video, audio, telemetry, GPS,
        and sensor samples are processed locally. DataOverlay does not upload
        them to the developer. Network transmission occurs only for a
        user-initiated share/export, optional network maps, a Google Play Pro
        purchase or restore, or a support report the user chooses to send.
      </div>

      <Section title="1. Controller and scope">
        <p>
          The developer responsible for DataOverlay is identified publicly as
          DataOverlay. Privacy, access, correction, deletion, and support
          requests can be sent to <ContactLink />. This policy covers the
          DataOverlay Android app and this policy website.
        </p>
        <p>
          The external alpha has no DataOverlay user accounts, advertising,
          behavioral analytics SDK, sale of personal data, or automatic
          crash-report upload.
        </p>
      </Section>

      <Section title="2. Data processed on the device">
        <p>When the user selects a feature and grants the relevant Android permission, DataOverlay may process:</p>
        <ul>
          <li>video, audio, subtitle, and telemetry files selected by the user;</li>
          <li>precise or approximate location and route coordinates;</li>
          <li>accelerometer, gyroscope, and device-orientation measurements;</li>
          <li>HUD projects, presets, synchronization offsets, and export settings;</li>
          <li>local diagnostics such as device model, Android version, video dimensions, memory use, encoder information, and error codes;</li>
          <li>Google Play product identifiers and purchase tokens when Pro is purchased or restored.</li>
        </ul>
        <p>
          Recording starts only after the user presses a recording control.
          Imported media is processed only for the project opened by the user.
        </p>
      </Section>

      <Section title="3. Local storage, export, and support reports">
        <p>
          Project media, telemetry, project state, and diagnostics are stored
          locally on the device. Automatic Android backup is disabled.
          DataOverlay does not automatically transmit video, audio, file names,
          GPS coordinates, raw sensor samples, or telemetry files to the
          developer.
        </p>
        <p>
          Exported media and shared files are written to storage or an app
          selected by the user. A support report excludes media, GPS
          coordinates, and raw telemetry. The user can inspect the report in
          the selected sharing app before sending it.
        </p>
      </Section>

      <Section title="4. Google Play purchases">
        <p>
          Purchases are handled by Google Play. For a purchase or restore,
          DataOverlay sends the package name, product ID, product type, and
          Google Play purchase token over HTTPS to the DataOverlay
          purchase-verification service. The service uses the Google Play
          Developer API only to validate and acknowledge Pro access and prevent
          purchase abuse.
        </p>
        <p>
          The verification service does not receive media, file names, GPS,
          sensor samples, or telemetry. It is designed not to persist request
          bodies. The app stores only a token hash and a time-limited local
          entitlement result. Purchase information is not used for advertising,
          profiling, or behavioral analytics.
        </p>
      </Section>

      <Section title="5. Optional network maps and third parties">
        <p>
          Network map lookups are disabled by default. If the user enables
          them, route coordinates may be sent to the configured map tile
          provider and Android geocoding provider to obtain terrain tiles, road
          names, and place labels. Providers may also receive ordinary network
          information such as an IP address under their own terms. Disabling
          network maps prevents new map and geocoding requests.
        </p>
        <p>
          Data may also be processed by Google Play for purchases, the selected
          Android sharing destination, and infrastructure providers that
          deliver the purchase verifier or this website. These providers act
          under their own terms and privacy notices.
        </p>
      </Section>

      <Section title="6. Purposes and security">
        <p>
          Data is processed to provide recording, telemetry synchronization,
          HUD preview and export, optional maps, purchase verification, fraud
          prevention, and user-requested support. Network connections use HTTPS
          and cleartext traffic is disabled by the Android app.
        </p>
        <p>
          No mobile application or network service can guarantee absolute
          security. DataOverlay limits collection, keeps media processing local,
          restricts server inputs, and does not embed service-account secrets in
          the app.
        </p>
      </Section>

      <Section title="7. Retention and deletion">
        <p>
          App-private projects, settings, entitlement cache, and diagnostics
          remain until the user deletes the relevant project or app data, or
          uninstalls DataOverlay. Exported media remains in user-selected
          storage and must be deleted by the user through Android or a file
          manager.
        </p>
        <p>
          The purchase verifier is designed not to retain request bodies.
          Infrastructure security logs may be retained for the period required
          for operation, abuse prevention, and legal compliance. Google Play
          purchase records are retained by Google under its own terms.
          DataOverlay has no app account and therefore no separate account
          profile to delete.
        </p>
      </Section>

      <Section title="8. Permissions and user controls">
        <ul>
          <li>Camera and microphone: optional phone video and audio recording.</li>
          <li>Location: GPS telemetry recording and synchronization.</li>
          <li>Notifications and foreground services: visible recording and export progress.</li>
          <li>Selected files and media: import and export initiated by the user.</li>
        </ul>
        <p>
          Permissions can be denied or revoked in Android settings. Network
          maps can be disabled in DataOverlay. Revoking a permission may disable
          the related feature but does not prevent local editing of already
          selected compatible files.
        </p>
      </Section>

      <Section title="9. User rights">
        <p>
          Depending on applicable law, users may request information about,
          access to, correction of, restriction of, objection to, or deletion
          of personal data controlled by DataOverlay. Requests can be sent to
          <span> </span><ContactLink />. Because projects and telemetry are
          normally stored only on the device, the fastest way to delete them is
          to remove the project, clear app data, or uninstall the app.
        </p>
        <p>
          Users in the European Economic Area may also lodge a complaint with
          their competent data-protection supervisory authority. DataOverlay
          does not make decisions producing legal or similarly significant
          effects through automated profiling.
        </p>
      </Section>

      <Section title="10. Children, changes, and website">
        <p>
          The external alpha is intended for invited adult testers and is not
          directed to children. Material policy changes will be communicated
          through release notes or test communications and reflected by a new
          effective date.
        </p>
        <p>
          This website contains no DataOverlay advertising or analytics code
          and sets no DataOverlay tracking cookies. Hosting infrastructure
          necessarily processes request information such as IP address and
          browser metadata to deliver and secure the page.
        </p>
      </Section>

      <div className="contactCard">
        <span>Developer</span>
        <strong>DataOverlay</strong>
        <span>Privacy and deletion requests</span>
        <ContactLink />
      </div>
    </PolicyShell>
  );
}

export function PolishPolicy() {
  return (
    <PolicyShell
      language="pl"
      title="Polityka prywatności"
      effective="Data obowiązywania: 28 lipca 2026 r."
      alternateHref="../"
      alternateLabel="English version"
    >
      <p className="lead">
        DataOverlay jest androidowym edytorem wideo z telemetrią oraz
        rejestratorem. Ta polityka wyjaśnia, jakie dane przetwarza aplikacja, co
        może opuścić urządzenie i jakie możliwości kontroli ma użytkownik.
      </p>

      <div className="notice">
        <strong>Podsumowanie prostym językiem.</strong> Film, audio, telemetria,
        GPS i próbki sensorów są przetwarzane lokalnie. DataOverlay nie wysyła
        ich do dewelopera. Transmisja sieciowa następuje tylko po świadomym
        udostępnieniu lub eksporcie, włączeniu opcjonalnych sieciowych map,
        zakupie albo przywróceniu Pro w Google Play lub wysłaniu wybranego
        raportu wsparcia.
      </div>

      <Section title="1. Administrator i zakres">
        <p>
          Deweloperem odpowiedzialnym za DataOverlay jest podmiot publicznie
          oznaczony jako DataOverlay. Pytania dotyczące prywatności, dostępu,
          sprostowania lub usunięcia danych można wysłać na <ContactLink />.
          Polityka obejmuje aplikację DataOverlay na Androida oraz tę stronę.
        </p>
        <p>
          Zewnętrzna wersja alfa nie ma kont DataOverlay, reklam, SDK analityki
          zachowania, sprzedaży danych osobowych ani automatycznego wysyłania
          raportów awarii.
        </p>
      </Section>

      <Section title="2. Dane przetwarzane na urządzeniu">
        <p>Po wybraniu funkcji i udzieleniu odpowiedniego uprawnienia DataOverlay może przetwarzać:</p>
        <ul>
          <li>filmy, audio oraz wybrane pliki napisów i telemetrii;</li>
          <li>dokładną albo przybliżoną lokalizację i współrzędne trasy;</li>
          <li>pomiary akcelerometru, żyroskopu i orientacji urządzenia;</li>
          <li>projekty HUD, presety, przesunięcia synchronizacji i ustawienia eksportu;</li>
          <li>lokalną diagnostykę, m.in. model urządzenia, wersję Androida, rozdzielczość, użycie pamięci, informacje o enkoderze i kody błędów;</li>
          <li>identyfikatory produktów i tokeny zakupów Google Play podczas zakupu lub przywracania Pro.</li>
        </ul>
        <p>
          Nagrywanie rozpoczyna się dopiero po użyciu przycisku nagrywania.
          Importowane materiały są przetwarzane tylko w projekcie otwartym przez
          użytkownika.
        </p>
      </Section>

      <Section title="3. Lokalny zapis, eksport i raporty wsparcia">
        <p>
          Materiały projektu, telemetria, stan projektu i diagnostyka są
          przechowywane lokalnie. Automatyczna kopia zapasowa Androida jest
          wyłączona. DataOverlay nie wysyła automatycznie deweloperowi filmów,
          audio, nazw plików, współrzędnych GPS, surowych próbek sensorów ani
          plików telemetrii.
        </p>
        <p>
          Wyeksportowane materiały i udostępniane pliki trafiają do pamięci albo
          aplikacji wybranej przez użytkownika. Raport wsparcia nie zawiera
          mediów, GPS ani surowej telemetrii i może zostać sprawdzony w aplikacji
          udostępniającej przed wysłaniem.
        </p>
      </Section>

      <Section title="4. Zakupy Google Play">
        <p>
          Zakupy obsługuje Google Play. Podczas zakupu lub przywracania
          DataOverlay przesyła przez HTTPS nazwę pakietu, identyfikator i typ
          produktu oraz token zakupu do usługi weryfikacyjnej DataOverlay.
          Usługa używa Google Play Developer API wyłącznie do potwierdzenia i
          zatwierdzenia dostępu Pro oraz przeciwdziałania nadużyciom.
        </p>
        <p>
          Usługa nie otrzymuje mediów, nazw plików, GPS, próbek sensorów ani
          telemetrii i jest zaprojektowana tak, aby nie utrwalać treści żądań.
          Aplikacja zapisuje jedynie skrót tokenu i czasowo ważny lokalny wynik
          uprawnienia. Informacje o zakupie nie służą reklamom, profilowaniu ani
          analityce zachowania.
        </p>
      </Section>

      <Section title="5. Opcjonalne mapy i podmioty zewnętrzne">
        <p>
          Mapy sieciowe są domyślnie wyłączone. Po ich włączeniu współrzędne
          trasy mogą zostać przekazane dostawcy kafelków i systemowemu
          geokoderowi Androida w celu pobrania terenu, nazw dróg i miejsc.
          Dostawcy mogą również otrzymać zwykłe dane sieciowe, np. adres IP,
          zgodnie ze swoimi warunkami. Wyłączenie map zatrzymuje nowe żądania.
        </p>
        <p>
          Dane mogą być również przetwarzane przez Google Play w związku z
          zakupem, wybraną aplikację udostępniania oraz dostawców infrastruktury
          obsługujących weryfikację zakupów lub tę stronę. Podmioty te działają
          według własnych warunków i polityk prywatności.
        </p>
      </Section>

      <Section title="6. Cele i bezpieczeństwo">
        <p>
          Dane są przetwarzane w celu nagrywania, synchronizacji telemetrii,
          podglądu i eksportu HUD, opcjonalnych map, weryfikacji zakupu,
          zapobiegania nadużyciom oraz wsparcia wybranego przez użytkownika.
          Połączenia sieciowe używają HTTPS, a aplikacja blokuje nieszyfrowany
          ruch HTTP.
        </p>
        <p>
          Żadna aplikacja ani usługa sieciowa nie może zagwarantować całkowitego
          bezpieczeństwa. DataOverlay ogranicza zakres danych, wykonuje obróbkę
          mediów lokalnie, ogranicza wejścia serwera i nie umieszcza sekretów
          konta serwisowego w aplikacji.
        </p>
      </Section>

      <Section title="7. Retencja i usuwanie">
        <p>
          Prywatne projekty, ustawienia, pamięć uprawnienia Pro i diagnostyka
          pozostają do czasu usunięcia projektu lub danych aplikacji albo jej
          odinstalowania. Wyeksportowane materiały pozostają w pamięci wybranej
          przez użytkownika i usuwa się je w Androidzie lub menedżerze plików.
        </p>
        <p>
          Usługa weryfikacji zakupów nie ma utrwalać treści żądań. Logi
          bezpieczeństwa infrastruktury mogą być przechowywane przez okres
          potrzebny do działania, zapobiegania nadużyciom i realizacji wymogów
          prawnych. Historię zakupu Google Play przechowuje Google według
          własnych zasad. DataOverlay nie ma konta aplikacyjnego ani osobnego
          profilu konta do usunięcia.
        </p>
      </Section>

      <Section title="8. Uprawnienia i kontrola użytkownika">
        <ul>
          <li>Kamera i mikrofon: opcjonalne nagrywanie filmu i audio telefonem.</li>
          <li>Lokalizacja: zapis i synchronizacja telemetrii GPS.</li>
          <li>Powiadomienia i foreground services: widoczny stan nagrywania oraz eksportu.</li>
          <li>Wybrane pliki i media: import i eksport zainicjowany przez użytkownika.</li>
        </ul>
        <p>
          Uprawnienia można odrzucić lub cofnąć w ustawieniach Androida. Mapy
          sieciowe można wyłączyć w DataOverlay. Cofnięcie uprawnienia może
          wyłączyć powiązaną funkcję, ale nie blokuje lokalnej edycji wcześniej
          wybranych zgodnych plików.
        </p>
      </Section>

      <Section title="9. Prawa użytkownika">
        <p>
          Zależnie od właściwych przepisów użytkownik może zażądać informacji,
          dostępu, sprostowania, ograniczenia, zgłosić sprzeciw albo zażądać
          usunięcia danych osobowych kontrolowanych przez DataOverlay. Żądania
          można wysłać na <ContactLink />. Ponieważ projekty i telemetria zwykle
          pozostają wyłącznie na urządzeniu, najszybszym sposobem ich usunięcia
          jest skasowanie projektu lub danych aplikacji albo jej odinstalowanie.
        </p>
        <p>
          Użytkownik z Europejskiego Obszaru Gospodarczego może również złożyć
          skargę do właściwego organu nadzorczego ochrony danych. DataOverlay nie
          podejmuje decyzji wywołujących skutki prawne lub podobnie istotne na
          podstawie automatycznego profilowania.
        </p>
      </Section>

      <Section title="10. Dzieci, zmiany i strona internetowa">
        <p>
          Zewnętrzna alfa jest przeznaczona dla zaproszonych dorosłych testerów
          i nie jest kierowana do dzieci. Istotne zmiany polityki zostaną
          przekazane w informacjach o wydaniu lub komunikacji testowej i
          otrzymają nową datę obowiązywania.
        </p>
        <p>
          Ta strona nie zawiera reklam ani kodu analitycznego DataOverlay i nie
          ustawia śledzących plików cookie DataOverlay. Infrastruktura hostingu
          musi przetwarzać informacje o żądaniu, takie jak adres IP i dane
          przeglądarki, aby dostarczyć i zabezpieczyć stronę.
        </p>
      </Section>

      <div className="contactCard">
        <span>Deweloper</span>
        <strong>DataOverlay</strong>
        <span>Pytania o prywatność i usunięcie danych</span>
        <ContactLink />
      </div>
    </PolicyShell>
  );
}
