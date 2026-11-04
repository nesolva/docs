# Source facts: what users see in Ailita and Alfred

Extracted from the product UIs on 2026-11-04. The UIs are in rioplatense Spanish (voseo) and English, so the docs use
voseo too ("ingresá", "revisá"). `<N>` marks a number that the docs must not publish: write "a few minutes" or
"after several attempts" instead. Writers have no access to the product repos, so if something isn't here, don't
invent it: write it under the task's Result.

Products:
- **Ailita ID**: the sign-in and personal account site.
- **Ailita Backoffice**: the console for organization administrators.
- **Alfred**: invoice capture.

Privacy policy: https://nesolva.com/privacy. The UIs link no support email, status page or changelog. The site navbar
already uses `support+docs@nesolva.com`.

---

## A. Ailita ID (end users)

**What it is.** "Un solo lugar para acceder a tus aplicaciones y cuidar tus datos personales." / "One place to access
your applications and look after your personal information."
- Users are the members of a merchant organization, and they use it to sign in to Nesolva products such as Alfred.
- The sign-in screen shows the organization's logo, name and color, plus "Continuás a / Continue to <app>".
- What a user can do depends on what their organization allows: password, email code, passkeys, Google or Microsoft
  SSO, open sign-up, and a required second factor.

### Sign in
1. **"Qué bueno verte." / "Good to see you."**
   - Field: Correo electrónico / Email.
   - Buttons: **Continuar / Continue**, and **Ingresar con passkey / Sign in with a passkey** (uses the device's
     fingerprint, face or PIN).
   - When the organization uses SSO: **Continuar con Google / Microsoft**.
   - When open sign-up is on: "¿No tenés cuenta? **Crear cuenta** / Don't have an account? **Create account**".
2. **"Elegí tu organización / Choose your organisation"**. Shown only when the email belongs to several
   organizations.
3. **"Tu contraseña / Your password"**. Links:
   - **¿Olvidaste tu contraseña? / Forgot your password?**
   - **Enviarme un código por email / Email me a code instead**, if the organization allows it.
   - **Usar otro email / Use another email**.

   With corporate SSO, the user sees the SSO button instead. If SSO is the only method, the user goes straight to
   the provider.
4. **Email code.** One of two screens appears:
   - "Revisá tu email / Check your email": a 6-digit code was sent.
   - "Confirmá que sos vos / Confirm it's you": a 6-digit code was sent because this is the first sign-in from this
     device.

   The code is sent automatically once all six digits are typed. **Reenviar código / Resend code** sends a new one
   and shows "Te enviamos un código nuevo. / We sent you a new code."
5. **"Verificación en dos pasos / Two-step verification"**. The user enters the code from the authenticator app or
   an 8-character backup code.
   - Link: **¿Perdiste tu teléfono y tus códigos? / Lost your phone and backup codes?**, which starts the admin
     recovery flow.
6. **"Protegé tu cuenta / Protect your account"**. Shown when the organization requires a second factor and the user
   has none.
   - The user scans the QR code with Google Authenticator, 1Password, Authy or a similar app.
   - Alternative: "¿No podés escanear? Ingresá esta clave: / Can't scan? Enter this key:".
   - Then the user enters the code from the app.
7. **"Guardá tus códigos de respaldo / Save your backup codes"**. Each code works once, and they are shown only this
   time. Buttons: **Copiar / Copy**, **Ya los guardé / I saved them**.
8. **"Ingresá más rápido la próxima vez / Sign in faster next time"**, an optional passkey offer.
   - Buttons: **Crear passkey / Create a passkey**, **Ahora no / Not now**.
9. **App consent**, the first time an app asks for data: "Vos decidís qué compartir. / You choose what to share."
   - The screen shows "<app> va a poder: / <app> will be able to:", followed by a list of permissions.
   - Buttons: **Permitir / Allow**, **Cancelar / Cancel**.
   - Permissions:
     - Saber que sos vos cuando volvés / Recognise you when you come back
     - Tu nombre y apellido / Your first and last name
     - Tu dirección de email / Your email address
     - La organización a la que pertenecés / The organisation you belong to
     - Tus roles en la organización / Your roles in the organisation
     - Mantener tu sesión abierta mientras la uses / Keep you signed in while you use it
   - Access can be removed later in **Aplicaciones / Applications**.
10. **"Confirmá que sos vos / Confirm it's you"**. Before sensitive changes, an app or the account may ask the user to
    confirm, with an authenticator code, an email code or **Confirmar con passkey / Confirm with a passkey**.
11. **"Cerraste sesión / You signed out"**, with the button **Ingresar de nuevo / Sign in again**.

### Create an account
- Account creation works only with an invitation link, or when the organization allows open sign-up.
- Screen **"Creá tu cuenta / Create your account"**, with the subtitle "<org> te invitó a sumarte / <org> invited you
  to join".
  - Fields: Nombre, Apellido, Email (fixed when invited), Contraseña.
  - Password hint: "A long phrase beats odd symbols". Don't publish the minimum length.
- After **Crear cuenta / Create account**, the user sees one of two screens:
  - "Revisá tu email / Check your email": confirm through the emailed link.
  - "Tu cuenta está lista / Your account is ready".
- The emailed link opens "Confirmando tu email… / Confirming your email…" and then "Email confirmado. Ya podés
  ingresar. / Email confirmed. You can sign in now."
- Without an invitation: "To create an account you need a link from your organisation or an invitation."

### Forgot password
1. **"Recuperá tu contraseña / Reset your password"**: enter the email, then **Enviar código / Send code**.
2. "If there's an account with that email, we sent a 6-digit code." The emailed link also opens the form.
3. The form has these fields: Código, **Nueva contraseña / New password** and **Repetí la contraseña / Repeat the
   password**. Button: **Cambiar contraseña / Change password**.
4. **"Contraseña actualizada / Password updated"**: the user is signed out on every other device and signs in with
   the new password.

### Lost second factor (recovery through an administrator)
1. **Pedí ayuda a tu organización / Ask your organisation for help**. An administrator confirms the user's identity
   through another channel (a call or video call) and then sends a link by email.
   - Optional field: **Mensaje para tu administrador / Message for your administrator**.
   - Button: **Enviar pedido / Send request**.
2. **"Pedido enviado / Request sent"** explains the next steps: an admin contacts you, you get a link once the
   request is approved, then you open it, confirm your password and set up a new second factor.
3. The link opens **"Recuperá el acceso / Recover access"**: enter your password, then **Quitar el segundo factor
   anterior / Remove the old second factor**.
4. The old factor is removed and all sessions are closed. The user signs in and sets up a new factor.
5. Footer help panel: "If you cannot sign in, reset your password. For problems with two-step verification or access
   to your organisation, contact its administrator."

### My account (**Mi cuenta / My account**)
The sections are Datos personales, Seguridad, Aplicaciones, Dispositivos, Sesiones and Actividad, plus **Cerrar
sesión**. The ES / EN switch is in the header.

- **Datos personales / Personal details**
  - **Editar mis datos / Edit my details** lets you change your first name, last name and phone number.
  - Change email: in **Nuevo email / New email**, use **Cambiar email / Change email**. A code is sent to the new
    address. Enter it, then **Continuar**. A verified address is marked **verificado / verified**.
- **Seguridad / Security**
  - Status line: "Two-step verification is enabled" or "An authenticator app is not set up yet".
  - **Passkeys**: a list showing when each was created and last used.
    - **Agregar passkey / Add a passkey** with a name; **Quitar / Remove**.
    - The organization can turn passkeys off.
  - **App de autenticación / Authenticator app**
    - When on, it shows "On · <N> backup codes left", with **Generar códigos nuevos / Generate new codes** and
      **Desactivar / Turn off**.
    - When off: **Configurar / Set up**, then the QR code or key, the code from the app, and the backup codes.
  - **Contraseña / Password**: current password plus new password. This signs you out on every other device. The
    row only appears for accounts that have a password.
  - **Active sessions**: link to Sesiones.
- **Aplicaciones / Applications**
  - Each connected app shows its permissions and when it was connected and last used.
  - **Revisar acceso / Review access**, then **Quitar acceso / Remove access**. Removing access means you authorize
    the app again next time.
- **Dispositivos / Devices**
  - Tags: **Este dispositivo / This device**, **De confianza / Trusted**.
  - **Ver detalle / View details** shows the first sign-in, last activity and IP address.
  - **Olvidar / Forget** works on any device except the current one.
- **Sesiones / Sessions**
  - Tag: **Sesión actual / Current session**.
  - **Revisar sesión / Review session** shows when the session started, its last activity, the browser and the IP
    address.
  - **Cerrar / End** ends one session. **Cerrar las demás sesiones / End all other sessions** ends the rest.
- **Actividad / Activity**: recent events, ES / EN.
  - Ingreso / Signed in
  - Intento de ingreso fallido / Failed sign-in attempt
  - Ingreso bloqueado / Sign-in blocked
  - Cierre de sesión / Signed out
  - Dispositivo nuevo / New device
  - Dispositivo olvidado / Device forgotten
  - App de autenticación activada/desactivada / Authenticator app turned on/off
  - Passkey agregada/quitada / Passkey added/removed
  - Contraseña cambiada / Password changed
  - Contraseña restablecida / Password reset
  - Email cambiado / Email changed
  - Aplicación conectada/desconectada / App connected/disconnected
  - Sesión de aplicación revocada por seguridad / App session revoked for security
  - Evento de seguridad / Security event
  - The docs say: if you don't recognize an event, change your password, end your other sessions and tell your
    administrator.
- **Confirming before sensitive changes**: you go through "Confirmá que sos vos" and come back to the same page.
  Without a second factor, you sign in again.
- **There is no self-service account deletion.** Only an organization administrator can delete a user.

### Ailita ID messages (ES | EN | when | what to do)
| ES | EN | When | What to do |
|---|---|---|---|
| Email o contraseña incorrectos. | Wrong email or password. | Wrong email or password | Try again or reset your password |
| El código no es correcto o ya venció. | That code is wrong or has expired. | Wrong or expired email code or link | Ask for a new code |
| Demasiados intentos con este código. Pedí uno nuevo. | Too many attempts with this code. Ask for a new one. | Too many tries with one code | Resend the code |
| El código no es correcto. | That code is wrong. | Wrong authenticator or backup code | Check the clock and the right account in the app, or use a backup code |
| Demasiados intentos. Esperá unos minutos. | Too many attempts. Wait a few minutes. | Too many attempts | Wait and try again |
| Tu ingreso venció. Empezá de nuevo. | Your sign-in expired. Start again. | Sign-in was left open too long | Start again |
| Tu ingreso cambió en otra pestaña. Empezá de nuevo. | Your sign-in changed in another tab. Start again. | Signed in from another tab | Use a single tab |
| Confirmá tu email primero. Te enviamos un enlace nuevo. | Confirm your email first. We sent you a new link. | Email not confirmed | Open the new link |
| Esta cuenta está desactivada. Hablá con tu administrador. | This account is disabled. Talk to your administrator. | The admin disabled the account | Contact your admin |
| Tu organización está suspendida. | Your organisation is suspended. | The organization is suspended | Contact your admin |
| Bloqueamos el ingreso por seguridad. Probá desde un dispositivo que uses habitualmente. | We blocked this sign-in for your security. Try from a device you usually use. | Sign-in blocked as a precaution | Use your usual device and network. If it keeps happening, contact your admin. Don't explain why. |
| Tu organización requiere un segundo factor. | Your organisation requires a second factor. | Second factor is mandatory | Set one up |
| Esperá unos segundos antes de pedir otro código. | Wait a few seconds before asking for another code. | Resent too quickly | Wait |
| Ya te enviamos un código nuevo. | We already sent you a new code. | No more resends allowed | Check spam, or start again |
| Solicitud rechazada. Recargá la página. | Request rejected. Reload the page. | The request couldn't be validated | Reload the page |
| No pudimos conectarnos. Revisá tu conexión. | We couldn't connect. Check your connection. | Network problem | Check your connection |
| Algo salió mal. Probá de nuevo. | Something went wrong. Please try again. | Any other error | Try again, then contact support |
| No pudimos validar la passkey. | We couldn't verify the passkey. | Passkey check failed | Try again or use another method |
| La solicitud venció. Probá de nuevo. | The request expired. Try again. | The passkey prompt took too long | Try again |
| Tu organización no permite passkeys. | Your organisation doesn't allow passkeys. | Passkeys are off | Use another method |
| Cancelaste el ingreso con tu proveedor. | You cancelled the sign-in with your provider. | Cancelled at Google or Microsoft | Try again |
| El ingreso con tu proveedor venció. Probá de nuevo. | The sign-in with your provider expired. Try again. | Took too long | Try again |
| No pudimos completar el ingreso con tu proveedor. | We couldn't complete the sign-in with your provider. | Provider error | Try again |
| Tu cuenta del proveedor no tiene acceso a esta organización. | Your provider account doesn't have access to this organisation. | Not invited | Ask your admin for an invitation |
| Tu email no está autorizado para esta organización. | Your email isn't allowed for this organisation. | Email domain not allowed | Use your work email |
| Tu cuenta de Microsoft pertenece a otra organización. | Your Microsoft account belongs to another organisation. | Wrong Microsoft account | Sign in with your work account |
| La aplicación pidió que vuelvas a ingresar, pero tu proveedor no te pidió la contraseña de nuevo. Probá otra vez. | The app asked you to sign in again, but your provider didn't ask for your password again. Try again. | The provider skipped signing in again | Try again |
| La contraseña no cumple los requisitos. | The password doesn't meet the requirements. | Password too weak or too short | Use a longer phrase |
| Las contraseñas no coinciden | Passwords don't match | The two fields differ | Type them again |
| Esta organización solo admite usuarios invitados. | This organisation only accepts invited users. | Sign-up is invitation-only | Ask for an invitation |
| La invitación ya no es válida. | This invitation is no longer valid. | Invitation used, cancelled or expired | Ask your admin for a new one |
| Usá el email al que llegó la invitación. | Use the email the invitation was sent to. | Different email | Use the invited email |
| La contraseña actual no es correcta. | Your current password is wrong. | Changing your password | Check it, or reset it |
| Ese email ya está en uso en tu organización. | That email is already used in your organisation. | Changing your email | Use another email |
| Confirmá que sos vos para continuar. | Confirm it's you to continue. | Sensitive change | Confirm, then repeat the change |

When an app sends you to sign in and something fails, the screen title is **"No podemos continuar / We can't
continue"**, with one of these messages:
- "The sign-in link is incomplete or was modified. Go back to the app and try again."
- "This app isn't registered with Ailita."
- "This app isn't allowed to receive your sign-in at that address."

For all three, go back to the app, and if it keeps happening, contact the app's support.

Loading screens: "Verificando tu sesión… / Checking your session…", "Volviendo a <app>… / Taking you back to <app>…".

---

## B. Ailita Backoffice (organization administrators)

**What it is.** "Quiénes pueden ingresar a los productos de tu organización con Ailita." / "Who can sign in to your
organisation's products with Ailita."
- The sections an admin sees depend on their permissions.
- Administrators always need a second factor.
- Before making changes, the console asks the admin to confirm their identity.

Navigation: **Mi organización / My organisation**. The header has **Mi cuenta / My account**, which opens Ailita ID,
**Salir / Sign out**, and the ES / EN switch.

### Screens
- **Usuarios / Users**
  - Search by exact email. Columns: person, status, roles, 2FA, last sign-in.
  - Statuses: Activo / Active, Sin verificar / Not verified, Desactivado / Disabled, Bloqueado / Locked.
  - The user detail page shows the status, whether the email is verified, the second factor, when the user was
    created and their last sign-in. Actions:
    - **Desactivar / Disable**: "User disabled and sessions closed."
    - **Reactivar / Reactivate**.
    - Edit roles.
  - The **Seguridad / Security** card ("For when someone loses their phone or suspects unauthorised access") has
    three actions:
    - **Cerrar todas las sesiones / Close all sessions**.
    - **Reiniciar segundo factor / Reset second factor**: removes the user's authenticator app and passkeys, and the
      user sets them up again at the next sign-in.
    - **Eliminar usuario / Delete user**: "This can't be undone."
  - The user detail page also shows the user's devices and recent activity.
- **Invitar usuario / Invite user**
  - Fields: Email and Rol (USER by default).
  - The person gets an email with a link to create their account. The link expires after a few days.
  - Button: **Enviar invitación / Send invitation**.
  - **Invitaciones / Invitations** lists the pending invitations (email, sent, expires), each with **Cancel**.
- **Roles**: "A role bundles permissions. Base and product roles are read-only; you build your organisation's roles
  from the permissions you hold."
  - Groups: Base, De producto / Product, De la organización / Organisation.
  - **Nuevo rol / New role**: name, description and permissions. An admin can only grant permissions they have.
  - **Administrador de la organización / Organisation administrator** can:
    - manage users, invitations, sessions, devices and activity;
    - manage roles;
    - manage the organization (settings, session policy, domains, corporate sign-in and the billing mailbox);
    - approve or reject access recovery requests;
    - see integrations and regenerate their credentials.
  - The Alfred role **Operador / Operator** allows these permissions:
    - Procesar documentos / Process documents
    - Descargar PDF y archivos de documentos / Download PDFs and document files
    - Ver facturas / Read invoices
    - Descargar el PDF de las facturas / Download invoice PDFs
  - Badges: ADMIN, USER. It's unclear whether they correspond exactly to the roles above, so don't claim it.
- **Acceso y seguridad / Access & security**
  - **Identidad visual / Branding**: name, logo URL, primary color and default language.
  - **Cómo ingresan / How people sign in**
    - Method: password; password or email code; corporate SSO only.
    - Account creation: invitation only, or open.
    - Toggles: passkeys, authenticator app (TOTP), password recovery by email.
  - **Sesiones y fricción / Sessions and friction**
    - "Second factor required for everyone".
    - Settings the admin chooses: maximum session length, idle timeout, how often to ask for 2FA again, remember
      device, and maximum concurrent sessions.
  - On save: "Changes saved. They apply from the next sign-in."
- **Dominios / Domains**: add a domain, create the TXT record that's shown, and then **Verificar / Verify**. A
  verified domain enables corporate SSO and the billing mailbox.
- **SSO corporativo / Corporate SSO** with Microsoft 365 or Google Workspace
  - Choose **App de Nesolva / Nesolva's app** (nothing to set up) or **App propia / Own app** (your own client ID and
    secret).
  - Microsoft also needs **Vincular organización de Microsoft / Link Microsoft organisation**.
  - Fields: email domain (must be verified), "Create users automatically", and "Enabled".
- **Casilla de facturación / Billing mailbox**: the mailbox where invoices arrive, which Alfred reads.
  - Save the address, then **Conectar con Microsoft / Connect with Microsoft**, and sign in with the **mailbox's**
    account, not your own.
  - Statuses: Conectada / Connected, Desconectada / Disconnected, Falta conectar / Not connected yet.
  - On success: "Mailbox connected. Alfred starts reading new invoices."
  - When disconnected: **Reconectar con Microsoft / Reconnect with Microsoft**.
- **Apps contratadas / Contracted apps**: the products your people can use. To add one, talk to Nesolva.
- **Recuperación de acceso / Access recovery**: requests from people who lost their second factor.
  - **Aprobar… / Approve…** requires checking "I confirmed through another channel (call, video call or in
    person)…". An internal note is optional. Then **Aprobar y enviar enlace / Approve and send link**: the person
    gets a one-time link that is valid for a limited time.
  - **Rechazar… / Reject…** takes an optional reason, which the person sees.
  - Statuses: Pendiente, Aprobado · esperando al usuario, Rechazado, Completado, Vencido / Pending, Approved ·
    waiting for the user, Rejected, Completed, Expired.
- **Integraciones / Integrations**: credentials for external systems that Nesolva sets up with the organization.
  - The admin can generate or regenerate the credentials. A new secret is shown only once (**Ya lo guardé / I've
    saved it**).
  - The public docs say only this and "contact Nesolva to set up an integration". No technical details.
- **Actividad / Activity**: the organization's recent security events. The labels are the same as in Ailita ID, plus
  Invitación enviada, Estado cambiado, Rol asignado, Rol quitado and Usuario eliminado.
- **"Confirmá que sos vos para hacer cambios / Confirm it's you to make changes"**: a quick confirmation, after which
  the admin comes back to the same screen (**Confirmar identidad / Confirm identity**) and repeats the action.

### Backoffice messages (ES | EN | when)
| ES | EN | When |
|---|---|---|
| No pudimos iniciar sesión | We couldn't sign you in | Sign-in failed (screen title, with Retry) |
| Tu cuenta no es administradora de ninguna organización. Pedile acceso a quien administre la tuya. | Your account is not an administrator of any organisation. Ask whoever manages yours for access. | Not an admin |
| El ingreso fue cancelado o esa cuenta no tiene acceso. | The sign-in was cancelled or that account has no access. | Cancelled or denied |
| No pudimos completar el ingreso. Probá de nuevo. | We couldn't complete the sign-in. Please try again. | Failed |
| Tu cuenta no tiene permisos de administración. | Your account has no administration permissions. | No visible sections |
| Tu sesión terminó. Volvé a ingresar. | Your session ended. Please sign in again. | Session expired |
| No tenés permisos para esta acción. | You don't have permission to do this. | Missing permission |
| No pudimos validar la solicitud. Recargá la página e intentá de nuevo. | We couldn't validate the request. Reload the page and try again. | Request couldn't be validated |
| Demasiados intentos. Esperá unos minutos. | Too many attempts. Wait a few minutes. | Too many attempts |
| Esa persona ya tiene cuenta. | That person already has an account. | Inviting an existing user |
| No podés hacer eso sobre tu propia cuenta. | You can't do that to your own account. | Disabling or deleting yourself |
| Ya existe un rol con ese nombre. | A role with that name already exists. | Duplicate role |
| Solo podés dar permisos que vos mismo tenés… | You can only grant permissions you hold yourself… | Granting a permission you don't have |
| Tiene que quedar al menos una persona activa con permiso para administrar roles… | At least one active person must keep the permission to manage roles… | Removing the last role manager |
| Revisá los campos marcados. | Check the highlighted fields. | Form |
| Dominio inválido. | Invalid domain. | Domains |
| Los dominios de correo públicos (gmail.com, outlook.com…) no pueden pertenecer a una organización. | Public mail domains… can't belong to an organisation. | Domains |
| Ese dominio ya lo verificó otra organización. | Another organisation already verified that domain. | Domains |
| Todavía no encontramos el registro TXT (el DNS puede tardar unos minutos). | We can't find the TXT record yet (DNS can take a few minutes). | Verified too early: wait and try again |
| Primero verificá el dominio en Dominios. | Verify the domain in Domains first. | SSO or mailbox |
| Primero vinculá tu organización de Microsoft. | Link your Microsoft organisation first. | SSO |
| Iniciaste sesión con otra cuenta. Tenés que entrar con la cuenta de la casilla. | You signed in with another account. You must sign in with the mailbox's account. | Mailbox |
| Esa casilla pertenece a otra organización de Microsoft. | That mailbox belongs to another Microsoft organisation. | Mailbox |
| Microsoft no otorgó acceso permanente. Aceptá todos los permisos. | Microsoft didn't grant permanent access. Accept every permission. | Mailbox |
| Cancelaste la conexión en Microsoft. | You cancelled the connection at Microsoft. | Mailbox |
| La conexión tardó demasiado. Probá de nuevo. | The connection took too long. Please try again. | Mailbox |
| Microsoft dejó de aceptar el acceso. | Microsoft stopped accepting the access. | Mailbox disconnected: reconnect |
| Confirmá la identidad de la persona por otro canal antes de aprobar. | Confirm the person's identity through another channel before approving. | Recovery |
| Ese pedido ya fue resuelto. | That request was already decided. | Recovery |
| El pedido venció: la persona tiene que pedirlo de nuevo. | The request expired: the person must ask again. | Recovery |
| Algo salió mal. Probá de nuevo. | Something went wrong. Please try again. | Any other error |

---

## C. Alfred (invoice capture)

**What it is.** "Alfred extrae, valida y deriva las facturas que recibe tu equipo." / "Alfred extracts, validates and
routes the invoices your team receives."
- It reads PDFs from the billing mailbox, marks what needs human review, and keeps a history of every change.
- Users are people in the organization with the **Operador / Operator** role who sign in with Ailita.
- Footer: "Captura de facturas de Nesolva / Invoice capture by Nesolva".

### Flows
- **"Ingresá a Alfred / Sign in to Alfred"**: **Entrar con Ailita / Sign in with Ailita**. "Your administrator
  manages access in Ailita."
  - The user menu has **Mi cuenta Ailita / Ailita account** and **Cerrar sesión / Sign out**.
- **Panel** (nav **Procesamiento / Processing**): **Tareas recientes / Recent tasks**.
  - Filters: status, Desde, Hasta. Columns: task, status, document, received.
  - Statuses (ES): Pendiente, En proceso, Revisión manual, Finalizada, Falló.
  - The English UI shows raw codes (PENDING, IN_PROGRESS, MANUAL_REVIEW, FINALIZED, FAILED). See the roadmap's Open
    questions.
- **Nueva factura / New Invoice**: you can also drag a PDF onto the page. The **Procesar factura / Process Invoice**
  dialog accepts PDF only.
- **Tarea #<id> / Task #<id>**: the extracted fields on one side, **Documento original / Original document** on the
  other (downloadable).
  - **Tomar tarea / Claim Task** shows "Tarea tomada", and the task is marked "La tomaste vos / Claimed by you".
  - **Editar campos / Edit Fields**, then **Guardar y finalizar / Submit & Finalize**. Confirmation: "¿Seguro que
    querés finalizar esta tarea?", then **Sí, finalizar / Yes, Finalize**.
  - A finalized task can be claimed again and corrected.
  - The status badge opens **Historial de estados / State History** and shows "Verificada por <name>".
- **Facturas / Invoices**
  - Search by supplier, RUT or tax ID, purchase order, country, invoice date, total amount (needs a currency) and
    category.
  - Views: **Tarjetas / Cards**, **Tabla / Table**.
  - The detail page shows the supplier, buyer, line items, addenda and the extracted fields with their confidence.
    **Abrir tarea de revisión / Open review task** appears when the invoice is still in review.
- **Órdenes de compra / Purchase orders**: appears only if Nesolva enabled the module for your organization.
  - Search by the full order number.
  - Each order shows Complete or Incomplete, a checklist of documents and what is missing.
  - Possible documents get **Es de esta orden / It belongs** or **No es de esta orden / Not this order**.
  - **Subir documentos / Upload documents** (PDF, images, Word, Excel, CSV), plus a timeline and a history.
  - **Sin vincular / Unlinked**: documents without a certain order. Actions: **Agregar a orden / Add to order**,
    **Descartar / Discard** (can be restored), or accept Alfred's suggestion.
- **"Confirmá que sos vos / Confirm it's you"**: before some changes, Ailita opens in a pop-up window (**Confirmar
  con Ailita / Confirm with Ailita**).

### Alfred messages (ES | EN | when)
| ES | EN | When |
|---|---|---|
| No pudimos completar el ingreso. Probá de nuevo. | We couldn't complete the sign-in. Please try again. | Sign-in failed |
| No pudimos contactar a Alfred. | We couldn't reach Alfred. | Service unreachable (Retry) |
| Alfred todavía no está habilitado / <org> aún no tiene Alfred activo. Pedile a Nesolva que lo habilite. | Alfred isn't enabled yet / <org> doesn't have Alfred enabled yet. Ask Nesolva to enable it. | Organization doesn't have Alfred. Option: **Usar otra cuenta** |
| Ya la revisó un operador. | Already reviewed by an operator. | Claiming a reviewed task |
| La tomó otro operador. / Otro operador acaba de tomar esta tarea. | Claimed by another operator. / This task was just claimed by another operator. | Someone else claimed it |
| La tarea ya no está disponible para revisión. | Task is no longer available for review. | The task changed status |
| No tenés permiso para tomar tareas. | You don't have permission to claim tasks. | Missing the Operator role: ask your admin |
| No pudimos tomar la tarea. Probá de nuevo. / Error de conexión. Probá de nuevo. | Unable to claim task… / Connection error… | Failure or network problem |
| Critical field '<field>' is missing after corrections / Field '<field>' must not be empty | (EN only) | Submit & Finalize with required fields empty |
| Solo se aceptan archivos PDF / No se pudo subir el archivo | Only PDF files are allowed / Upload failed | Uploading an invoice |
| No pudimos cargar el PDF / PDF no disponible | Failed to load PDF / PDF not available | PDF viewer |
| Elegí un rango de un mes como máximo, o agregá un filtro… / Elegí una moneda para filtrar por monto. | Pick a range of one month at most, or add a … filter. / Choose a currency to filter by amount. | Searching invoices |
| Ese tipo de archivo no se acepta… / El archivo pesa más de <N> MB. | That file type is not accepted… / The file is larger than <N> MB. | Order documents |
| Tu navegador bloqueó la ventana de Ailita. Permití ventanas emergentes para Alfred… | Your browser blocked the Ailita window. Allow pop-ups for Alfred… | Pop-up blocked |
| La ventana se cerró sin confirmar. El cambio no se guardó. | The window closed before you confirmed. The change was not saved. | Pop-up closed |
| Confirmaste con otra cuenta de Ailita… | You confirmed with another Ailita account… | Wrong account |
| Este cambio necesita tu app de autenticación o tu passkey. | This change needs your authenticator app or passkey. | A stronger confirmation is needed |

---

## Not in the UIs (don't document as if it existed)
- Self-service account deletion and data export.
- Phone verification. The phone number is only a data field.
- Support, status or changelog links inside the apps.
- The content of the emails (invitation, codes, links) wasn't reviewed.
