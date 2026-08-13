import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

const translations = {
  en: {
    // Nav
    navPrivacy: 'Privacy',
    navDeleteData: 'Delete Data',
    navRegister: 'Register',
    navPrograma: 'About the program',

    // Home — tabs
    tabApp: 'The App',
    tabProgram: 'The Parental Program',

    // Home — App tab
    heroSubtitle: 'A research app that helps you understand your smartphone usage.',
    featureUsage: 'Usage tracking',
    featureBudgets: 'Time spent in each app',
    featurePrivacy: 'Private & secure',
    ctaText: 'Learn about your data',
    playStoreGetItOn: 'GET IT ON',
    playStoreAria: 'Get Mi Ritmo Digital on Google Play',

    // Home — Parental Program tab
    programSubtitle: 'A guidance program for parents and caregivers on healthy smartphone use in adolescence.',
    featureParents: 'Healthy screen habits',
    featureAdolescent: 'Improve their well-being',
    featureResearch: 'Help them do better in school',
    programCta: 'Register for the program',
    cursoCta: 'Course content (participants)',

    footer: 'Built for academic research at Nova School of Business and Economics',

    // Privacy
    privacyTitle: 'Privacy Policy',
    privacyUpdated: 'Last updated: April 2026',
    privacyIntroTitle: 'Introduction',
    privacyIntroText: 'Mi Ritmo Digital is developed for academic research purposes. This privacy policy explains how we collect, use, and protect your data when you use the app as part of our research study.',
    privacyDataTitle: 'Data We Collect',
    privacyDataIntro: 'The app collects <strong>only</strong> the following information:',
    privacyDataItem1Label: 'App usage statistics:',
    privacyDataItem1: 'Which apps you use and for how long',
    privacyDataItem2Label: 'Device information:',
    privacyDataItem2: 'Device model, operating system version, and a unique device identifier',
    privacyDataItem3Label: 'App interaction data:',
    privacyDataItem3: 'How you interact with Mi Ritmo Digital features (e.g., setting budgets, responding to usage warnings)',
    privacyDataNote: 'We do not collect any other data. The app does not access your location, contacts, messages, photos, browsing history, or any personal content on your device.',
    privacyUseTitle: 'How We Use Your Data',
    privacyUseIntro: 'Your data is used for:',
    privacyUseItem1: 'Displaying your usage statistics within the app',
    privacyUseItem2: 'Enforcing usage budgets you have set',
    privacyUseItem3: 'Academic research on smartphone usage patterns',
    privacyStorageTitle: 'Data Storage and Security',
    privacyStorageIntro: 'Your data is:',
    privacyStorageItem1: 'Transmitted securely to our research server using encryption',
    privacyStorageItem2: 'Stored on secure servers with restricted access',
    privacyStorageItem3: 'Associated with a de-identified participant code, not your name or email',
    privacyStorageItem4: 'Accessible only to authorized members of the research team',
    privacySharingTitle: 'Data Sharing',
    privacySharingText: 'We do not sell or share your personal data with third parties. Anonymized, aggregated data may be used in academic publications.',
    privacyRightsTitle: 'Your Rights',
    privacyRightsIntro: 'You have the right to:',
    privacyRightsItem1: 'Withdraw from the study at any time',
    privacyRightsItem2: 'Request deletion of your data',
    privacyRightsItem3: 'Request a copy of your data',
    privacyPermsTitle: 'Permissions',
    privacyPermsIntro: 'The app requires the following permissions:',
    privacyPermsItem1Label: 'Usage Access:',
    privacyPermsItem1: 'To track which apps you use and for how long',
    privacyPermsItem2Label: 'Display over other apps:',
    privacyPermsItem2: 'To show usage warnings when you reach your budget limits',
    privacyYouthTitle: "Young People's Privacy",
    privacyYouthText1: 'This app may be used by participants aged 11 to 17 as part of our research study. For participants under 18, we require informed parental or guardian consent, documented via an online form completed during the introductory call, before any data is collected.',
    privacyYouthIntro: 'Parents and guardians have the right to:',
    privacyYouthItem1: "Request deletion of their child's data at any time",
    privacyYouthItem2: 'Withdraw their child from the study',
    privacyYouthNote: 'We do not knowingly collect data from children under 11.',
    privacyRetentionTitle: 'Data Retention',
    privacyRetentionText: 'Identifiable data is deleted when the study ends or when you withdraw from the study. Anonymized, aggregated data may be retained for up to 5 years for research purposes.',
    privacyContactTitle: 'Contact',
    privacyContactText: 'If you have questions about this privacy policy or your data, please contact:',
    backHome: 'Back to Home',

    // Data Deletion
    deleteTitle: 'Data Deletion Request',
    deleteSubtitle: 'How to request deletion of your data',
    deleteRightTitle: 'Your Right to Data Deletion',
    deleteRightText: 'As a participant in our research study, you have the right to request deletion of your personal data at any time. This page explains what data we collect, what gets deleted, and how to submit a request.',
    deleteDataTitle: 'Data We Collect',
    deleteDataIntro: 'Mi Ritmo Digital collects the following types of data:',
    deleteDataItem1Label: 'Email address:',
    deleteDataItem1: 'Used only during enrollment to link you to your participant code',
    deleteDataItem2Label: 'De-identified participant ID:',
    deleteDataItem2: 'A unique code that identifies your data without revealing your identity',
    deleteDataItem3Label: 'App usage statistics:',
    deleteDataItem3: 'Which apps you use and for how long (e.g., 45 minutes on Instagram today)',
    deleteDataItem4Label: 'App interaction data:',
    deleteDataItem4: 'How you interact with Phone Dashboard features such as setting budgets and responding to usage warnings',
    deleteDataItem5Label: 'Crash logs:',
    deleteDataItem5: 'Technical information collected via Microsoft AppCenter when the app encounters errors',
    deleteWhatTitle: 'What Gets Deleted',
    deleteWhatIntro: 'When you request data deletion, we will permanently remove:',
    deleteWhatItem1: 'Your email address from our enrollment records',
    deleteWhatItem2: 'All app usage data linked to your participant ID',
    deleteWhatItem3: 'Your participant profile and settings',
    deleteWhatItem4: 'Any crash logs associated with your device',
    deleteRetainTitle: 'What May Be Retained',
    deleteRetainIntro: 'The following data may be retained after a deletion request, as permitted by research ethics guidelines:',
    deleteRetainItem1Label: 'Anonymized aggregate data:',
    deleteRetainItem1: 'Statistical summaries that cannot be linked back to you (e.g., average usage across all participants)',
    deleteRetainItem2Label: 'Research records:',
    deleteRetainItem2: 'Documentation required for research integrity and audit purposes, stored separately from identifiable data',
    deleteHowTitle: 'How to Request Deletion',
    deleteHowIntro: 'To request deletion of your data, please:',
    deleteHowStep1: 'Send an email to the address below with the subject line "Data Deletion Request"',
    deleteHowStep2: 'Include your participant ID or the email address you used to enroll (so we can locate your data)',
    deleteHowStep3: 'State that you wish to have your data deleted',
    deleteHowNote: 'We will process your request within 30 days and send you confirmation once your data has been deleted.',
    deleteContactTitle: 'Contact',
    deleteContactIntro: 'Send your data deletion request to:',
    deleteContactSubject: 'Please use the subject line:',
    deleteContactSubjectText: 'Data Deletion Request - Mi Ritmo Digital',
    deleteAfterTitle: 'After Deletion',
    deleteAfterText: 'Once your data is deleted, you will no longer be able to participate in the study. If you only wish to stop using the app but keep your data for the research, you can simply uninstall the app without submitting a deletion request.',

    // Registration
    registerHeroH1: 'Register for the program',
    registerHeroSubtitle: 'Fill out the online registration form — it only takes a few minutes. It is free, with no commitment.',
    registerHeroCta: 'Message us on WhatsApp',

    // Inscripcion (sign-up form) page
    inscripcionH1: 'Sign up for the program',
    inscripcionSubtitle:
      'Answer a few short questions to check that your family can participate and leave your contact details. It takes less than 3 minutes.',
    inscripcionFallbackText: 'If the form does not load,',
    inscripcionFallbackLink: 'open it in a new tab',
    inscripcionOpenForm: 'Open the sign-up form',
    inscripcionOpenFormNote: 'It opens in a new tab and takes about 2 minutes.',
    registerOnlineCta: 'Sign up online',
    registerFinalCtaH2: 'Ready to start?',
    registerFinalCtaText: 'Fill out the registration form and a program advisor will reach out to schedule your welcome call.',
    registerFinalCtaAltPre: 'Prefer to talk to someone first?',
    registerFinalCtaAltLink: 'Message us on WhatsApp',
    registerVideoTitle: 'Why join the program?',

    // Agendar
    navAgendar: 'Schedule',
    agendarTitle: 'Schedule your call',
    agendarSubtitle: 'A 25-MINUTE CALL WITH THE PROGRAM TEAM',
    agendarIntro: 'Pick a time that works for you and your child. Your call will last about 25 minutes.',
    agendarFallback: "If the calendar doesn't load below,",
    agendarFallbackLink: 'open it directly here',
    agendarCta: 'Schedule your call',
    agendarCtaHelper: 'Already filled out the form? Pick a time for your call:',

    // Programa — Hero
    programaHeroH1: 'Find your Digital Rhythm',
    programaHeroSubtitle: 'A free guidance program for parents and caregivers who want to help their adolescent children build a healthier relationship with their phone.',
    programaHeroCta: 'Register for the program',

    // Programa — Section 1: Why
    programaS1H2: 'So your child learns better and feels better',
    programaS1P1: 'Problematic phone use in adolescence affects the two things parents care most about: <strong>school performance</strong> and <strong>emotional wellbeing</strong> — sleep, attention, mood, self-esteem. <strong>Mi Ritmo Digital</strong> exists to support you on both fronts.',
    programaS1P2: 'We walk alongside you with close conversations and evidence-based tools so you and your child can find a better balance.',

    // Programa — Section 2: How it works
    programaS2H2: 'Three weeks. Short calls with an expert. From the comfort of your home.',
    programaS2Lead: 'The program runs for <strong>3 weeks</strong> by <strong>phone and WhatsApp</strong> — you choose the times.',
    programaS2Item1Icon: '🗓',
    programaS2Item1Label: '1 welcome call',
    programaS2Item1Detail: '(~20 min)',
    programaS2Item2Icon: '📞',
    programaS2Item2Label: '3 weekly calls',
    programaS2Item2Detail: '(~20 min each), with your expert facilitator',
    programaS2Item3Icon: '💬',
    programaS2Item3Label: 'WhatsApp messages',
    programaS2Item3Detail: 'between sessions',
    programaS2Item4Icon: '📱',
    programaS2Item4Label: 'The Mi Ritmo Digital app',
    programaS2Item4Detail: 'to understand phone use',
    programaS2Total: 'About <strong>1.5 hours total</strong>, spread across small conversations.',

    // Programa — Section 3: Modules
    programaS3H2: 'Three topics, one per week',
    programaS3M1Icon: '🌙',
    programaS3M1Title: 'Module 1 — Sleep and phones',
    programaS3M1Desc: 'The importance of sleep in adolescence and how phones can affect it.',
    programaS3M2Icon: '⏱',
    programaS3M2Title: 'Module 2 — Quality time',
    programaS3M2Desc: 'How much time adolescents really spend in front of screens, and what the evidence says about its use.',
    programaS3M3Icon: '🎬',
    programaS3M3Title: 'Module 3 — Quality content',
    programaS3M3Desc: 'What kind of content adolescents consume on their phones, and how it can influence their wellbeing.',

    // Programa — Section 4: Benefits
    programaS4H2: 'Benefits for you and your child',
    programaS4Item1Icon: '📞',
    programaS4Item1: 'A person who listens and walks with you each week.',
    programaS4Item2Icon: '🧠',
    programaS4Item2: "More clarity on how phones affect your child's wellbeing and learning.",
    programaS4Item3Icon: '🛠',
    programaS4Item3: 'Concrete, evidence-based tools.',
    programaS4Item4Icon: '🌿',
    programaS4Item4: 'Calmer conversations at home.',

    // Programa — Section 5: Who's behind
    programaS5H2: "Who's behind the program",
    programaS5P1: 'This program is an initiative of researchers at <strong>Nova School of Business and Economics, Harvard, Yale, MIT and the Paris School of Economics</strong>, as part of a study that aims to help adolescents build a better relationship with their phones.',
    programaS5P2: 'The program is <strong>free</strong> and all your information is <strong>confidential</strong>, protected by the ethics boards of the participating universities.',

    // Programa — Section 6: Who can join
    programaS6H2: 'Is this for me?',
    programaS6Lead: 'You can join if:',
    programaS6Item1: 'You care for an <strong>adolescent aged 11–17</strong>.',
    programaS6Item2: 'Your child <strong>has their own phone</strong>.',
    programaS6Note: 'You don\'t need to know anything about technology, and your child doesn\'t need to "have a problem" with their phone.',

    // Programa — Section 7: FAQ
    programaS7H2: 'Frequently asked questions',
    programaS7Q1: 'Does it cost anything?',
    programaS7A1: 'No, it is 100% free.',
    programaS7Q2: 'Do I have to go somewhere?',
    programaS7A2: 'No, everything is by phone and WhatsApp.',
    programaS7Q3: 'Does my child participate too?',
    programaS7A3: 'Yes — the program works best when your child takes the course with you.',
    programaS7Q4: 'What about my data?',
    programaS7A4Pre: 'Your information is confidential. Only the research team has access. More detail in our',
    programaS7A4Link: 'privacy policy',
    programaS7A4Post: '.',
    programaS7Q5: 'Can I withdraw?',
    programaS7A5: 'At any time, without having to give a reason.',

    // Programa — Final CTA
    programaCtaH2: 'Start your digital rhythm',
    programaCtaText: "Registration takes a few minutes. We'll then contact you to schedule your welcome call.",
    programaCtaBtn: 'Register now',

    // Registration — short intro blocks
    registerIntroH2: "Three weeks to find your family's digital rhythm",
    registerIntroP: 'A free phone-based program for parents and caregivers who want to support their adolescent children in a healthier relationship with their phone. On the schedule you choose.',
    registerBenefitsH2: "What you'll take away",
    registerBenefit1: 'A person who listens and walks with you each week.',
    registerBenefit2: "Clarity on how phones affect your child's wellbeing and learning.",
    registerBenefit3: 'Evidence-based tools for your family.',
    registerBenefit4: 'Calmer conversations at home.',
    registerTrustH2: 'Why you can trust this',
    registerTrustText: 'This program is an initiative of researchers at <strong>Nova School of Business and Economics, Harvard, Yale, MIT and the Paris School of Economics</strong>, as part of a study that aims to help adolescents build a better relationship with their phones.',
    registerTrustMoreLink: 'Learn about the full program',
  },
  es: {
    // Nav
    navPrivacy: 'Privacidad',
    navDeleteData: 'Eliminar Datos',
    navRegister: 'Registro',
    navPrograma: 'Sobre el programa',

    // Home — tabs
    tabApp: 'La App',
    tabProgram: 'El Programa Parental',

    // Home — App tab
    heroSubtitle: 'Una aplicación de investigación que te ayuda a entender tu uso del celular.',
    featureUsage: 'Seguimiento de uso',
    featureBudgets: 'Límites por app',
    featurePrivacy: 'Privado y seguro',
    ctaText: 'Conoce sobre tus datos',
    playStoreGetItOn: 'DISPONIBLE EN',
    playStoreAria: 'Descarga Mi Ritmo Digital en Google Play',

    // Home — Parental Program tab
    programSubtitle: 'Un programa de orientación para padres, madres y cuidadores sobre el uso saludable del celular en la adolescencia.',
    featureParents: 'Hábitos saludables del celular',
    featureAdolescent: 'Mejora su bienestar emocional',
    featureResearch: 'Mejora su aprendizaje',
    programCta: 'Regístrate ahora',
    cursoCta: 'Contenido del curso (participantes)',

    footer: 'Desarrollado para investigación académica en Nova School of Business and Economics',

    // Privacy
    privacyTitle: 'Política de Privacidad',
    privacyUpdated: 'Última actualización: Abril 2026',
    privacyIntroTitle: 'Introducción',
    privacyIntroText: 'Mi Ritmo Digital está desarrollado con fines de investigación académica. Esta política de privacidad explica cómo recopilamos, usamos y protegemos tus datos cuando usas la aplicación como parte de nuestro estudio de investigación.',
    privacyDataTitle: 'Datos que Recopilamos',
    privacyDataIntro: 'La aplicación recopila <strong>solo</strong> la siguiente información:',
    privacyDataItem1Label: 'Estadísticas de uso de aplicaciones:',
    privacyDataItem1: 'Qué aplicaciones usas y por cuánto tiempo',
    privacyDataItem2Label: 'Información del dispositivo:',
    privacyDataItem2: 'Modelo del dispositivo, versión del sistema operativo y un identificador único del dispositivo',
    privacyDataItem3Label: 'Datos de interacción con la app:',
    privacyDataItem3: 'Cómo interactúas con las funciones de Mi Ritmo Digital (por ejemplo, establecer presupuestos, responder a advertencias de uso)',
    privacyDataNote: 'No recopilamos ningún otro dato. La aplicación no accede a tu ubicación, contactos, mensajes, fotos, historial de navegación ni ningún contenido personal en tu dispositivo.',
    privacyUseTitle: 'Cómo Usamos tus Datos',
    privacyUseIntro: 'Tus datos se usan para:',
    privacyUseItem1: 'Mostrar tus estadísticas de uso dentro de la aplicación',
    privacyUseItem2: 'Aplicar los presupuestos de uso que hayas establecido',
    privacyUseItem3: 'Investigación académica sobre patrones de uso del smartphone',
    privacyStorageTitle: 'Almacenamiento y Seguridad de Datos',
    privacyStorageIntro: 'Tus datos son:',
    privacyStorageItem1: 'Transmitidos de forma segura a nuestro servidor de investigación mediante cifrado',
    privacyStorageItem2: 'Almacenados en servidores seguros con acceso restringido',
    privacyStorageItem3: 'Asociados con un código de participante desidentificado, no con tu nombre o correo electrónico',
    privacyStorageItem4: 'Accesibles solo para miembros autorizados del equipo de investigación',
    privacySharingTitle: 'Compartir Datos',
    privacySharingText: 'No vendemos ni compartimos tus datos personales con terceros. Los datos anonimizados y agregados pueden usarse en publicaciones académicas.',
    privacyRightsTitle: 'Tus Derechos',
    privacyRightsIntro: 'Tienes derecho a:',
    privacyRightsItem1: 'Retirarte del estudio en cualquier momento',
    privacyRightsItem2: 'Solicitar la eliminación de tus datos',
    privacyRightsItem3: 'Solicitar una copia de tus datos',
    privacyPermsTitle: 'Permisos',
    privacyPermsIntro: 'La aplicación requiere los siguientes permisos:',
    privacyPermsItem1Label: 'Acceso de uso:',
    privacyPermsItem1: 'Para rastrear qué aplicaciones usas y por cuánto tiempo',
    privacyPermsItem2Label: 'Mostrar sobre otras aplicaciones:',
    privacyPermsItem2: 'Para mostrar advertencias de uso cuando alcances tus límites de presupuesto',
    privacyYouthTitle: 'Privacidad de los Jóvenes',
    privacyYouthText1: 'Esta aplicación puede ser utilizada por participantes de 11 a 17 años como parte de nuestro estudio de investigación. Para participantes menores de 18 años, requerimos el consentimiento informado de los padres o tutores, documentado mediante un formulario en línea completado durante la llamada introductoria, antes de recopilar cualquier dato.',
    privacyYouthIntro: 'Los padres y tutores tienen derecho a:',
    privacyYouthItem1: 'Solicitar la eliminación de los datos de su hijo/a en cualquier momento',
    privacyYouthItem2: 'Retirar a su hijo/a del estudio',
    privacyYouthNote: 'No recopilamos datos de niños menores de 11 años de forma consciente.',
    privacyRetentionTitle: 'Retención de Datos',
    privacyRetentionText: 'Los datos identificables se eliminan cuando el estudio termina o cuando te retiras del estudio. Los datos anonimizados y agregados pueden conservarse hasta 5 años con fines de investigación.',
    privacyContactTitle: 'Contacto',
    privacyContactText: 'Si tienes preguntas sobre esta política de privacidad o tus datos, por favor contacta a:',
    backHome: 'Volver al Inicio',

    // Data Deletion
    deleteTitle: 'Solicitud de Eliminación de Datos',
    deleteSubtitle: 'Cómo solicitar la eliminación de tus datos',
    deleteRightTitle: 'Tu Derecho a la Eliminación de Datos',
    deleteRightText: 'Como participante en nuestro estudio de investigación, tienes derecho a solicitar la eliminación de tus datos personales en cualquier momento. Esta página explica qué datos recopilamos, qué se elimina y cómo enviar una solicitud.',
    deleteDataTitle: 'Datos que Recopilamos',
    deleteDataIntro: 'Mi Ritmo Digital recopila los siguientes tipos de datos:',
    deleteDataItem1Label: 'Correo electrónico:',
    deleteDataItem1: 'Usado solo durante la inscripción para vincularte con tu código de participante',
    deleteDataItem2Label: 'ID de participante desidentificado:',
    deleteDataItem2: 'Un código único que identifica tus datos sin revelar tu identidad',
    deleteDataItem3Label: 'Estadísticas de uso de aplicaciones:',
    deleteDataItem3: 'Qué aplicaciones usas y por cuánto tiempo (por ejemplo, 45 minutos en Instagram hoy)',
    deleteDataItem4Label: 'Datos de interacción con la app:',
    deleteDataItem4: 'Cómo interactúas con las funciones de Phone Dashboard, como establecer presupuestos y responder a advertencias de uso',
    deleteDataItem5Label: 'Registros de errores:',
    deleteDataItem5: 'Información técnica recopilada a través de Microsoft AppCenter cuando la aplicación encuentra errores',
    deleteWhatTitle: 'Qué se Elimina',
    deleteWhatIntro: 'Cuando solicites la eliminación de datos, eliminaremos permanentemente:',
    deleteWhatItem1: 'Tu correo electrónico de nuestros registros de inscripción',
    deleteWhatItem2: 'Todos los datos de uso de aplicaciones vinculados a tu ID de participante',
    deleteWhatItem3: 'Tu perfil de participante y configuraciones',
    deleteWhatItem4: 'Cualquier registro de errores asociado con tu dispositivo',
    deleteRetainTitle: 'Qué Puede Conservarse',
    deleteRetainIntro: 'Los siguientes datos pueden conservarse después de una solicitud de eliminación, según lo permitido por las directrices de ética de investigación:',
    deleteRetainItem1Label: 'Datos agregados anonimizados:',
    deleteRetainItem1: 'Resúmenes estadísticos que no pueden vincularse contigo (por ejemplo, uso promedio de todos los participantes)',
    deleteRetainItem2Label: 'Registros de investigación:',
    deleteRetainItem2: 'Documentación requerida para la integridad de la investigación y propósitos de auditoría, almacenada por separado de los datos identificables',
    deleteHowTitle: 'Cómo Solicitar la Eliminación',
    deleteHowIntro: 'Para solicitar la eliminación de tus datos, por favor:',
    deleteHowStep1: 'Envía un correo electrónico a la dirección de abajo con el asunto "Solicitud de Eliminación de Datos"',
    deleteHowStep2: 'Incluye tu ID de participante o el correo electrónico que usaste para inscribirte (para que podamos localizar tus datos)',
    deleteHowStep3: 'Indica que deseas que tus datos sean eliminados',
    deleteHowNote: 'Procesaremos tu solicitud en un plazo de 30 días y te enviaremos confirmación una vez que tus datos hayan sido eliminados.',
    deleteContactTitle: 'Contacto',
    deleteContactIntro: 'Envía tu solicitud de eliminación de datos a:',
    deleteContactSubject: 'Por favor usa el asunto:',
    deleteContactSubjectText: 'Solicitud de Eliminación de Datos - Mi Ritmo Digital',
    deleteAfterTitle: 'Después de la Eliminación',
    deleteAfterText: 'Una vez que tus datos sean eliminados, ya no podrás participar en el estudio. Si solo deseas dejar de usar la aplicación pero mantener tus datos para la investigación, puedes simplemente desinstalar la aplicación sin enviar una solicitud de eliminación.',

    // Registration
    registerHeroH1: 'Regístrate al programa',
    registerHeroSubtitle: 'Llena el formulario de inscripción en línea — solo te toma unos minutos. Es gratis y no te compromete a nada.',
    registerHeroCta: 'Escríbenos por WhatsApp',

    // Inscripcion (formulario de inscripción)
    inscripcionH1: 'Inscríbete al programa',
    inscripcionSubtitle:
      'Responde unas preguntas cortas para saber si tu familia puede participar y déjanos tus datos de contacto. Toma menos de 3 minutos.',
    inscripcionFallbackText: 'Si el formulario no carga,',
    inscripcionFallbackLink: 'ábrelo en una pestaña nueva',
    inscripcionOpenForm: 'Abrir el formulario',
    inscripcionOpenFormNote: 'Se abre en una pestaña nueva y toma unos 2 minutos.',
    registerOnlineCta: 'Inscríbete en línea',
    registerFinalCtaH2: '¿Listo para empezar?',
    registerFinalCtaText: 'Llena el formulario de inscripción y un asesor del programa te contacta para agendar tu llamada de bienvenida.',
    registerFinalCtaAltPre: '¿Prefieres hablar con alguien primero?',
    registerFinalCtaAltLink: 'Escríbenos por WhatsApp',
    registerVideoTitle: '¿Por qué inscribirte al programa?',

    // Agendar
    navAgendar: 'Agendar',
    agendarTitle: 'Agenda tu llamada',
    agendarSubtitle: 'LLAMADA DE 25 MINUTOS CON EL EQUIPO DEL PROGRAMA',
    agendarIntro: 'Elige el horario que mejor les quede a ti y a tu hijo/a. La llamada dura unos 25 minutos.',
    agendarFallback: 'Si el calendario no carga,',
    agendarFallbackLink: 'ábrelo directamente aquí',
    agendarCta: 'Agenda tu llamada',
    agendarCtaHelper: '¿Ya llenaste el formulario? Elige el horario de tu llamada:',

    // Programa — Hero
    programaHeroH1: 'Encuentra tu Ritmo Digital',
    programaHeroSubtitle: 'Un programa gratuito de acompañamiento para padres, madres y cuidadores que quieren ayudar a sus hijos adolescentes a tener una relación más sana con el celular.',
    programaHeroCta: 'Regístrate al programa',

    // Programa — Sección 1: Por qué
    programaS1H2: 'Para que tu hijo/a aprenda mejor y se sienta mejor',
    programaS1P1: 'El uso problemático del celular en la adolescencia afecta dos cosas que como papás nos importan profundamente: el <strong>rendimiento académico</strong> y el <strong>bienestar emocional</strong> — el sueño, la atención, el ánimo, la autoestima. <strong>Mi Ritmo Digital</strong> existe para apoyarte en esos dos frentes.',
    programaS1P2: 'Te acompañamos con conversaciones cercanas y herramientas basadas en evidencia para que encuentres, con tu hijo/a, un mejor equilibrio.',

    // Programa — Sección 2: Cómo funciona
    programaS2H2: 'Tres semanas. Llamadas cortas por un experto. Desde la comodidad de tu casa.',
    programaS2Lead: 'El programa dura <strong>3 semanas</strong> y se hace <strong>por teléfono y WhatsApp</strong> — tú eliges los horarios.',
    programaS2Item1Icon: '🗓',
    programaS2Item1Label: '1 llamada de bienvenida',
    programaS2Item1Detail: '(~20 min)',
    programaS2Item2Icon: '📞',
    programaS2Item2Label: '3 llamadas semanales',
    programaS2Item2Detail: '(~20 min cada una), con tu facilitador/a experto/a',
    programaS2Item3Icon: '💬',
    programaS2Item3Label: 'Mensajes por WhatsApp',
    programaS2Item3Detail: 'entre sesiones',
    programaS2Item4Icon: '📱',
    programaS2Item4Label: 'La app Mi Ritmo Digital',
    programaS2Item4Detail: 'para conocer el uso del celular',
    programaS2Total: 'En total, alrededor de <strong>1.5 horas</strong> distribuidas en pequeñas conversaciones.',

    // Programa — Sección 3: Módulos
    programaS3H2: 'Tres temas, una semana cada uno',
    programaS3M1Icon: '🌙',
    programaS3M1Title: 'Módulo 1 — Sueño y celular',
    programaS3M1Desc: 'La importancia del sueño en la adolescencia y cómo el celular puede afectarlo.',
    programaS3M2Icon: '⏱',
    programaS3M2Title: 'Módulo 2 — Tiempo de calidad',
    programaS3M2Desc: 'Cuánto tiempo realmente pasan los adolescentes frente a la pantalla y qué dice la evidencia sobre su uso.',
    programaS3M3Icon: '🎬',
    programaS3M3Title: 'Módulo 3 — Contenido de calidad',
    programaS3M3Desc: 'Qué tipo de contenido consumen los adolescentes en sus celulares y cómo eso puede influir en su bienestar.',

    // Programa — Sección 4: Beneficios
    programaS4H2: 'Beneficios para ti y para tu hijo/a',
    programaS4Item1Icon: '📞',
    programaS4Item1: 'Una persona que te escucha y te acompaña cada semana.',
    programaS4Item2Icon: '🧠',
    programaS4Item2: 'Más claridad sobre cómo el celular afecta el bienestar y el aprendizaje de tu hijo/a.',
    programaS4Item3Icon: '🛠',
    programaS4Item3: 'Herramientas concretas, basadas en evidencia.',
    programaS4Item4Icon: '🌿',
    programaS4Item4: 'Conversaciones más tranquilas en casa.',

    // Programa — Sección 5: Quiénes están detrás
    programaS5H2: 'Quiénes están detrás del programa',
    programaS5P1: 'Este programa es una iniciativa de investigadores de <strong>Nova School of Business and Economics, Harvard, Yale, MIT y la Paris School of Economics</strong>, dentro de un estudio que busca ayudar a los adolescentes a tener una mejor relación con el celular.',
    programaS5P2: 'El programa es <strong>gratuito</strong> y toda tu información es <strong>confidencial</strong>, protegida por los comités de ética de las universidades participantes.',

    // Programa — Sección 6: Quién puede participar
    programaS6H2: '¿Es para mí?',
    programaS6Lead: 'Puedes inscribirte si:',
    programaS6Item1: 'Estás a cargo de un/a <strong>adolescente de 11 a 17 años</strong>.',
    programaS6Item2: 'Tu hijo/a <strong>tiene celular propio</strong>.',
    programaS6Note: 'No necesitas saber de tecnología, ni que tu hijo/a "tenga un problema" con el celular.',

    // Programa — Sección 7: FAQ
    programaS7H2: 'Preguntas frecuentes',
    programaS7Q1: '¿Tiene algún costo?',
    programaS7A1: 'No, es 100% gratuito.',
    programaS7Q2: '¿Tengo que ir a algún lugar?',
    programaS7A2: 'No, todo es por teléfono y WhatsApp.',
    programaS7Q3: '¿Mi hijo/a también participa?',
    programaS7A3: 'Sí, el programa funciona mejor si tu hijo/a hace el curso contigo.',
    programaS7Q4: '¿Qué pasa con mis datos?',
    programaS7A4Pre: 'Tu información es confidencial. Solo el equipo de investigación tiene acceso. Más detalles en nuestra',
    programaS7A4Link: 'política de privacidad',
    programaS7A4Post: '.',
    programaS7Q5: '¿Puedo retirarme?',
    programaS7A5: 'En cualquier momento, sin tener que dar explicaciones.',

    // Programa — Final CTA
    programaCtaH2: 'Comienza tu ritmo digital',
    programaCtaText: 'Inscribirte toma unos minutos. Luego te contactamos para agendar tu llamada de bienvenida.',
    programaCtaBtn: 'Regístrate ahora',

    // Registration — bloques cortos de intro
    registerIntroH2: 'Tres semanas para encontrar el ritmo digital de tu familia',
    registerIntroP: 'Un programa gratuito por teléfono para padres, madres y cuidadores que quieren acompañar a sus hijos adolescentes en una relación más sana con el celular. En los horarios que tú eliges.',
    registerBenefitsH2: 'Lo que vas a llevarte',
    registerBenefit1: 'Una persona que te escucha y te acompaña cada semana.',
    registerBenefit2: 'Claridad sobre cómo el celular afecta el bienestar y el aprendizaje de tu hijo/a.',
    registerBenefit3: 'Herramientas basadas en evidencia para tu familia.',
    registerBenefit4: 'Conversaciones más tranquilas en casa.',
    registerTrustH2: '¿Por qué es de confianza?',
    registerTrustText: 'Este programa es una iniciativa de investigadores de <strong>Nova School of Business and Economics, Harvard, Yale, MIT y la Paris School of Economics</strong>, dentro de un estudio que busca ayudar a los adolescentes a tener una mejor relación con el celular.',
    registerTrustMoreLink: 'Conoce el programa completo',
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es')

  const t = (key) => translations[language]?.[key] || translations.en[key] || key

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
