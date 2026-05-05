import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

const translations = {
  en: {
    // Nav
    navPrivacy: 'Privacy',
    navDeleteData: 'Delete Data',
    navRegister: 'Register',

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
    registerTitle: 'Mi Ritmo Digital - Registration Form',
    registerSubtitle: 'GUIDANCE PROGRAM FOR PARENTS AND CAREGIVERS ON HEALTHY SMARTPHONE USE IN ADOLESCENCE',
    registerVideoTitle: 'Why join the program?',
    registerWhatsappTitle: 'Join the free program — write to us!',

    // Agendar
    agendarTitle: 'Schedule your first call',
    agendarSubtitle: 'A 25-MINUTE INTRODUCTORY CALL TO START THE PROGRAM',
    agendarIntro: "We're so glad you're here! Pick a time that works for you and your child. In 25 minutes we'll get to know each other, walk you through how the program works, and answer your questions.",
    agendarFallback: "If the calendar doesn't load below,",
    agendarFallbackLink: 'open it directly here',
  },
  es: {
    // Nav
    navPrivacy: 'Privacidad',
    navDeleteData: 'Eliminar Datos',
    navRegister: 'Registro',

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
    registerTitle: 'Mi Ritmo Digital - Formulario de Registro',
    registerSubtitle: 'PROGRAMA DE ORIENTACIÓN A PADRES, MADRES Y CUIDADORES EN EL USO SALUDABLE DE CELULARES EN LA ADOLESCENCIA',
    registerVideoTitle: '¿Por qué inscribirte al programa?',
    registerWhatsappTitle: '¡Inscríbete al programa gratuito — escríbenos!',

    // Agendar
    agendarTitle: 'Agenda tu primera llamada',
    agendarSubtitle: 'LLAMADA INTRODUCTORIA DE 25 MINUTOS PARA EMPEZAR EL PROGRAMA',
    agendarIntro: '¡Bienvenido/a! Elige el horario que mejor les quede a ti y a tu hijo/a. En 25 minutos vamos a conocernos, contarte cómo funciona el programa y resolver tus dudas.',
    agendarFallback: 'Si el calendario no carga,',
    agendarFallbackLink: 'ábrelo directamente aquí',
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
