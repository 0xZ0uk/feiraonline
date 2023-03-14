const commonTexts = {
  signIn: {
    phoneCode: {
      title: "Verifique seu telefone",
      subtitle: "para continuar no(a) {{applicationName}}",
      formTitle: "Código de verificação",
      formSubtitle:
        "Insira o código de verificação enviado para o seu número de telefone",
      resendButton: "Reenviar código",
    },
  },
} as const;

export const ptPT = {
  socialButtonsBlockButton: "Continuar com {{provider|titleize}}",
  dividerText: "ou",
  formFieldLabel__emailAddress: "Endereço de email",
  formFieldLabel__emailAddresses: "Endereços de email",
  formFieldLabel__phoneNumber: "Número de telefone",
  formFieldLabel__username: "Nome de utilizador",
  formFieldLabel__emailAddress_phoneNumber:
    "Endereço de email ou número de telefone",
  formFieldLabel__emailAddress_username:
    "Endereço de email ou nome de utilizador",
  formFieldLabel__phoneNumber_username:
    "Número de telefone ou nome de utilizador",
  formFieldLabel__emailAddress_phoneNumber_username:
    "Endereço de email, número de telefone ou nome de utilizador",
  formFieldLabel__password: "Palavra-passe",
  formFieldLabel__newPassword: "Nova palavra-passe",
  formFieldLabel__confirmPassword: "Confirmar palavra-passe",
  formFieldLabel__firstName: "Nome próprio",
  formFieldLabel__lastName: "Apelido",
  formFieldLabel__backupCode: "Código de backup",
  formFieldLabel__organizationName: "Nome da organização",
  formFieldLabel__role: "Função",
  formFieldInputPlaceholder__emailAddress: "",
  formFieldInputPlaceholder__emailAddresses:
    "Introduza ou cole um ou mais endereços de email, separados por espaços ou vírgulas",
  formFieldInputPlaceholder__phoneNumber: "",
  formFieldInputPlaceholder__username: "",
  formFieldInputPlaceholder__emailAddress_phoneNumber: "",
  formFieldInputPlaceholder__emailAddress_username: "",
  formFieldInputPlaceholder__phoneNumber_username: "",
  formFieldInputPlaceholder__emailAddress_phoneNumber_username: "",
  formFieldInputPlaceholder__password: "",
  formFieldInputPlaceholder__firstName: "",
  formFieldInputPlaceholder__lastName: "",
  formFieldInputPlaceholder__backupCode: "",
  formFieldInputPlaceholder__organizationName: "",
  formFieldAction__forgotPassword: "Esqueceu-se da palavra-passe",
  formFieldHintText__optional: "Opcional",
  formButtonPrimary: "Continuar",
  signInEnterPasswordTitle: "Introduza a sua palavra-passe",
  backButton: "Voltar",
  footerActionLink__useAnotherMethod: "Usar outro método",
  badge__primary: "Principal",
  badge__thisDevice: "Este dispositivo",
  badge__userDevice: "Dispositivo do utilizador",
  badge__otherImpersonatorDevice: "Outro dispositivo de impersonator",
  badge__default: "Padrão",
  badge__unverified: "Não verificado",
  badge__requiresAction: "Requer ação",
  badge__you: "Você",
  footerPageLink__help: "Ajuda",
  footerPageLink__privacy: "Privacidade",
  footerPageLink__terms: "Termos",
  paginationButton__previous: "Anterior",
  paginationButton__next: "Seguinte",
  paginationRowText__displaying: "A exibir",
  paginationRowText__of: "de",
  membershipRole__admin: "Admin",
  membershipRole__basicMember: "Membro",
  membershipRole__guestMember: "Convidado",
  signUp: {
    start: {
      title: "Crie sua conta",
      subtitle: "para continuar no(a) {{applicationName}}",
      actionText: "Já possui uma conta?",
      actionLink: "Entrar",
    },
    emailLink: {
      title: "Verifique seu e-mail",
      subtitle: "para continuar no(a) {{applicationName}}",
      formTitle: "Link de verificação",
      formSubtitle:
        "Use o link de verificação enviado para o seu endereço de e-mail",
      resendButton: "Reenviar link",
      verified: {
        title: "Cadastro realizado com sucesso",
      },
      loading: {
        title: "Realizando cadastro...",
      },
      verifiedSwitchTab: {
        title: "E-mail verificado com sucesso",
        subtitle: "Retorne para a aba aberta recentemente para continuar",
        subtitleNewTab: "Retorne para a aba anterior para continuar",
      },
    },
    emailCode: {
      title: "Verifique seu e-mail",
      subtitle: "para continuar no(a) {{applicationName}}",
      formTitle: "Código de verificação",
      formSubtitle:
        "Insira o código de verificação enviado para o seu endereço de e-mail",
      resendButton: "Reenviar código",
    },
    phoneCode: {
      title: "Verifique seu telefone",
      subtitle: "para continuar no(a) {{applicationName}}",
      formTitle: "Código de verificação",
      formSubtitle:
        "Insira o código de verificação enviado para o seu número de telefone",
      resendButton: "Reenviar código",
    },
    continue: {
      title: "Preencha os campos faltantes",
      subtitle: "para continuar no(a) {{applicationName}}",
      actionText: "Já possui uma conta?",
      actionLink: "Entrar",
    },
  },
  signIn: {
    start: {
      title: "Entrar",
      subtitle: "para continuar no(a) {{applicationName}}",
      actionText: "Não possui uma conta?",
      actionLink: "Cadastrar-se",
    },
    password: {
      title: "Insira sua senha",
      subtitle: "para continuar no(a) {{applicationName}}",
      actionLink: "Usar outro método",
    },
    emailCode: {
      title: "Verifique seu e-mail",
      subtitle: "para continuar no(a) {{applicationName}}",
      formTitle: "Código de verificação",
      formSubtitle:
        "Insira o código de verificação enviado para o seu endereço de e-mail",
      resendButton: "Reenviar código",
    },
    emailLink: {
      title: "Verifique seu e-mail",
      subtitle: "para continuar no(a) {{applicationName}}",
      formTitle: "Link de verificação",
      formSubtitle: "Use o link de verificação enviado para o seu e-mail",
      resendButton: "Reenviar link",
      unusedTab: {
        title: "Você pode fechar esta aba",
      },
      verified: {
        title: "Entrada realizada com sucesso",
        subtitle: "Você será redirecionado em breve",
      },
      verifiedSwitchTab: {
        subtitle: "Retorne para a aba original para continuar",
        titleNewTab: "Entrada realizada em outra aba",
        subtitleNewTab: "Retorne para a aba aberta recentemente para continuar",
      },
      loading: {
        title: "Realizando entrada...",
        subtitle: "Você será redirecionado em breve",
      },
      failed: {
        title: "Este link de verificação é inválido",
        subtitle: "Retorne para a aba original para continuar",
      },
      expired: {
        title: "Este link de verificação expirou",
        subtitle: "Retorne para a aba original para continuar",
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: "" },
    totpMfa: {
      title: "Verificação de dois passos",
      subtitle: "",
      formTitle: "Código de verificação",
      formSubtitle:
        "Insira o código de verificação gerado pelo seu aplicativo autenticador",
    },
    backupCodeMfa: {
      title: "Insira um código de backup",
      subtitle: "para continuar no(a) {{applicationName}}",
      formTitle: "",
      formSubtitle: "",
    },
    alternativeMethods: {
      title: "Usar outro método",
      actionLink: "Obter ajuda",
      blockButton__emailLink: "Enviar link para {{identifier}}",
      blockButton__emailCode: "Enviar código para {{identifier}}",
      blockButton__phoneCode: "Enviar código para {{identifier}}",
      blockButton__password: "Entrar com sua senha",
      blockButton__totp: "Usar seu aplicativo autenticador",
      blockButton__backupCode: "Usar um código de backup",
      getHelp: {
        title: "Obter ajuda",
        content: `Se você estiver tendo dificuldades para entrar na sua conta, envie-nos um e-mail e trabalharemos com você para restaurar o acesso o mais rápido possível.`,
        blockButton__emailSupport: "E-mail de suporte",
      },
    },
    noAvailableMethods: {
      title: "Não é possível entrar",
      subtitle: "Ocorreu um erro",
      message:
        "Não é possível prosseguir com a entrada. Não há fator de autenticação disponível.",
    },
  },
  userProfile: {
    mobileButton__menu: "Menu",
    formButtonPrimary__continue: "Continuar",
    formButtonPrimary__finish: "Concluir",
    formButtonReset: "Cancelar",
    start: {
      headerTitle__account: "Conta",
      headerTitle__security: "Segurança",
      headerSubtitle__account: "Gerencie as informações da sua conta",
      headerSubtitle__security: "Gerencie suas preferências de segurança",
      profileSection: {
        title: "Perfil",
      },
      usernameSection: {
        title: "Nome de usuário",
        primaryButton__changeUsername: "Alterar nome de usuário",
        primaryButton__setUsername: "Definir nome de usuário",
      },
      emailAddressesSection: {
        title: "Endereços de e-mail",
        primaryButton: "Adicionar um endereço de e-mail",
        detailsTitle__primary: "Endereço de e-mail principal",
        detailsSubtitle__primary: "Este é o seu endereço de e-mail principal",
        detailsAction__primary: "Completar verificação",
        detailsTitle__nonPrimary: "Definir como endereço de e-mail principal",
        detailsSubtitle__nonPrimary:
          "Defina este endereço de e-mail como principal para receber comunicações relacionadas à sua conta.",
        detailsAction__nonPrimary: "Definir como principal",
        detailsTitle__unverified: "Endereço de e-mail não verificado",
        detailsSubtitle__unverified:
          "Este endereço de e-mail não foi verificado e pode ter funcionalidades limitadas",
        detailsAction__unverified: "Completar verificação",
        destructiveActionTitle: "Remover",
        destructiveActionSubtitle:
          "Excluir este endereço de e-mail e removê-lo da sua conta",
        destructiveAction: "Remover endereço de e-mail",
      },
      phoneNumbersSection: {
        title: "Números de telefone",
        primaryButton: "Adicionar um número de telefone",
        detailsTitle__primary: "Número de telefone principal",
        detailsSubtitle__primary: "Este é o seu número de telefone principal",
        detailsAction__primary: "Completar verificação",
        detailsTitle__nonPrimary: "Definir como número de telefone principal",
        detailsSubtitle__nonPrimary:
          "Defina este número de telefone como principal para receber comunicações relacionadas à sua conta.",
        detailsAction__nonPrimary: "Definir como principal",
        detailsTitle__unverified: "Número de telefone não verificado",
        detailsSubtitle__unverified:
          "Este número de telefone não foi verificado e pode ter funcionalidades limitadas",
        detailsAction__unverified: "Completar verificação",
        destructiveActionTitle: "Remover",
        destructiveActionSubtitle:
          "Excluir este número de telefone e removê-lo da sua conta",
        destructiveAction: "Remover número de telefone",
      },
      connectedAccountsSection: {
        title: "Contas conectadas",
        primaryButton: "Conectar uma conta",
        title__conectionFailed: "Tentar conexão novamente",
        title__reauthorize: "Nova autorização necessária",
        subtitle__reauthorize:
          "As permissões necessárias foram atualizadas, e você pode estar enfrentando funcionalidades limitadas. Por favor, faça uma nova autorização para evitar problemas.",
        actionLabel__conectionFailed: "Tentar novamente",
        actionLabel__reauthorize: "Autorizar agora",
        destructiveActionTitle: "Remover",
        destructiveActionSubtitle: "Remover esta conta conectada",
        destructiveActionAccordionSubtitle: "Remover conta conectada",
      },
      passwordSection: {
        title: "Palavra-passe",
        primaryButton__changePassword: "Alterar palavra-passe",
        primaryButton__setPassword: "Definir palavra-passe",
      },
      mfaSection: {
        title: "Verificação em duas etapas",
        primaryButton: "Adicionar verificação em duas etapas",
        phoneCode: {
          destructiveActionTitle: "Remover",
          destructiveActionSubtitle:
            "Remover este número de telefone dos métodos de verificação em duas etapas",
          destructiveActionLabel: "Remover número de telefone",
          title__default: "Fator predefinido",
          title__setDefault: "Definir como fator predefinido",
          subtitle__default:
            "Este fator será usado como o método predefinido de verificação em duas etapas ao iniciar sessão.",
          subtitle__setDefault:
            "Definir este fator como o fator predefinido para usá-lo como o método predefinido de verificação em duas etapas ao iniciar sessão.",
          actionLabel__setDefault: "Definir como predefinido",
        },
        backupCodes: {
          headerTitle: "Códigos de backup",
          title__regenerate: "Regenerar códigos de backup",
          subtitle__regenerate:
            "Obter um novo conjunto de códigos de backup seguros. Os códigos de backup anteriores serão excluídos e não poderão ser usados.",
          actionLabel__regenerate: "Regenerar códigos",
        },
        totp: {
          headerTitle: "Aplicação de autenticação",
          title: "Fator predefinido",
          subtitle:
            "Este fator será usado como o método predefinido de verificação em duas etapas ao iniciar sessão.",
          destructiveActionTitle: "Remover",
          destructiveActionSubtitle:
            "Remover a aplicação de autenticação dos métodos de verificação em duas etapas",
          destructiveActionLabel: "Remover aplicação de autenticação",
        },
      },
      activeDevicesSection: {
        title: "Dispositivos ativos",
        primaryButton: "Dispositivos ativos",
        detailsTitle: "Dispositivo atual",
        detailsSubtitle: "Este é o dispositivo que você está usando atualmente",
        destructiveActionTitle: "Sair",
        destructiveActionSubtitle: "Sair da sua conta neste dispositivo",
        destructiveAction: "Sair do dispositivo",
      },
      web3WalletsSection: {
        title: "Carteiras Web3",
        primaryButton: "Carteiras Web3",
        destructiveActionTitle: "Remover",
        destructiveActionSubtitle: "Remover esta carteira Web3 da sua conta",
        destructiveAction: "Remover carteira",
      },
    },
    profilePage: {
      title: "Atualizar perfil",
      imageFormTitle: "Imagem de perfil",
      imageFormSubtitle: "Enviar imagem",
      imageFormDestructiveActionSubtitle: "Remover imagem",
      fileDropAreaTitle: "Arraste o arquivo aqui, ou...",
      fileDropAreaAction: "Selecionar arquivo",
      fileDropAreaHint:
        "Enviar uma imagem JPG, PNG, GIF ou WEBP com menos de 10 MB",
      successMessage: "O seu perfil foi atualizado.",
    },
    usernamePage: {
      title: "Atualizar nome de usuário",
      successMessage: "O seu nome de usuário foi atualizado.",
    },
    emailAddressPage: {
      title: "Adicionar endereço de email",
      emailCode: {
        formHint:
          "Um email contendo um código de verificação será enviado para este endereço de email.",
        formTitle: "Código de verificação",
        formSubtitle:
          "Digite o código de verificação enviado para {{identifier}}",
        resendButton: "Reenviar código",
        successMessage: "O email {{identifier}} foi adicionado à sua conta.",
      },
      emailLink: {
        formHint:
          "Um email contendo um link de verificação será enviado para este endereço de email.",
        formTitle: "Link de verificação",
        formSubtitle:
          "Clique no link de verificação no email enviado para {{identifier}}",
        resendButton: "Reenviar link",
        successMessage: "O email {{identifier}} foi adicionado à sua conta.",
      },
      removeResource: {
        title: "Remover endereço de email",
        messageLine1: "{{identifier}} será removido desta conta.",
        messageLine2:
          "Você não poderá mais fazer login usando este endereço de email.",
        successMessage: "{{emailAddress}} foi removido da sua conta.",
      },
    },
    phoneNumberPage: {
      title: "Adicionar número de telefone",
      successMessage: "{{identifier}} foi adicionado à sua conta.",
      infoText:
        "Será enviado um SMS com um link de verificação para este número de telefone.",
      infoText__secondary: "Podem aplicar-se taxas de mensagem e dados.",
      removeResource: {
        title: "Remover número de telefone",
        messageLine1: "{{identifier}} será removido desta conta.",
        messageLine2:
          "Não poderá mais iniciar sessão usando este número de telefone.",
        successMessage: "{{phoneNumber}} foi removido da sua conta.",
      },
    },
    connectedAccountPage: {
      title: "Adicionar conta conectada",
      formHint: "Selecione um provedor para conectar a sua conta.",
      formHint__noAccounts: "Não há provedores externos de contas disponíveis.",
      socialButtonsBlockButton: "Conectar conta {{provider|titleize}}",
      successMessage: "O provedor foi adicionado à sua conta.",
      removeResource: {
        title: "Remover conta conectada",
        messageLine1: "{{identifier}} será removido desta conta.",
        messageLine2:
          "Não poderá mais usar esta conta conectada e quaisquer recursos dependentes deixarão de funcionar.",
        successMessage: "{{connectedAccount}} foi removido da sua conta.",
      },
    },
    web3WalletPage: {
      title: "Adicionar carteira web3",
      subtitle__availableWallets:
        "Selecione uma carteira web3 para conectar à sua conta.",
      subtitle__unavailableWallets: "Não há carteiras web3 disponíveis.",
      successMessage: "A carteira foi adicionada à sua conta.",
      removeResource: {
        title: "Remover carteira web3",
        messageLine1: "{{identifier}} será removido desta conta.",
        messageLine2:
          "Não poderá mais iniciar sessão usando esta carteira web3.",
        successMessage: "{{web3Wallet}} foi removida da sua conta.",
      },
    },
    passwordPage: {
      title: "Definir senha",
      successMessage: "A sua senha foi definida.",
    },
    mfaPage: {
      title: "Adicionar verificação em duas etapas",
      formHint: "Selecione um método para adicionar.",
    },
    mfaTOTPPage: {
      title: "Adicionar aplicação autenticadora",
      verifyTitle: "Código de verificação",
      verifySubtitle:
        "Insira o código de verificação gerado pela sua aplicação autenticadora",
      successMessage:
        "A verificação em dois passos está agora ativada. Ao entrar, precisará inserir um código de verificação da sua aplicação autenticadora como passo adicional.",
      authenticatorApp: {
        infoText__ableToScan:
          "Configure um novo método de login na sua aplicação autenticadora e escaneie o seguinte código QR para associá-lo à sua conta.",
        infoText__unableToScan:
          "Configure um novo método de login na sua aplicação autenticadora e insira a chave fornecida abaixo.",
        inputLabel__unableToScan1:
          "Certifique-se de que as palavras-passe baseadas em tempo ou únicas estão ativadas e conclua a associação da sua conta.",
        inputLabel__unableToScan2:
          "Alternativamente, se a sua aplicação autenticadora suportar URIs TOTP, também pode copiar o URI completo.",
        buttonAbleToScan__nonPrimary: "Escanear o código QR em vez disso",
        buttonUnableToScan__nonPrimary: "Não é possível escanear o código QR?",
      },
      removeResource: {
        title: "Remover verificação em dois passos",
        messageLine1:
          "Os códigos de verificação desta aplicação autenticadora deixarão de ser necessários quando entrar.",
        messageLine2:
          "A sua conta pode ficar menos segura. Tem a certeza de que deseja continuar?",
        successMessage:
          "A verificação em dois passos por aplicação autenticadora foi removida.",
      },
    },
    mfaPhoneCodePage: {
      title: "Adicionar verificação de código SMS",
      primaryButton__addPhoneNumber: "Adicionar um número de telefone",
      subtitle__availablePhoneNumbers:
        "Selecione um número de telefone para registrar a verificação em dois passos de código SMS.",
      subtitle__unavailablePhoneNumbers:
        "Não há números de telefone disponíveis para registrar a verificação em dois passos de código SMS.",
      successMessage:
        "A verificação em dois passos de código SMS está agora ativada para este número de telefone. Ao entrar, precisará inserir um código de verificação enviado para este número de telefone como passo adicional.",
      removeResource: {
        title: "Remover verificação em dois passos",
        messageLine1:
          "{{identifier}} deixará de receber códigos de verificação ao entrar.",
        messageLine2:
          "A sua conta pode ficar menos segura. Tem a certeza de que deseja continuar?",
        successMessage:
          "A verificação em dois passos de código SMS foi removida para {{mfaPhoneCode}}",
      },
    },
    backupCodePage: {
      title: "Adicionar verificação por códigos de backup",
      title__codelist: "Códigos de backup",
      subtitle__codelist: "Guarde-os com segurança e mantenha-os secretos.",
      infoText1: "Os códigos de backup serão ativados para esta conta.",
      infoText2:
        "Mantenha os códigos de backup secretos e guarde-os com segurança. Pode regenerar os códigos de backup se suspeitar que foram comprometidos.",
      successSubtitle:
        "Pode utilizar um destes códigos para iniciar sessão na sua conta, se perder acesso ao seu dispositivo de autenticação.",
      successMessage:
        "Os códigos de backup foram ativados. Pode utilizar um destes códigos para iniciar sessão na sua conta, se perder acesso ao seu dispositivo de autenticação. Cada código só pode ser utilizado uma vez.",
      actionLabel__copy: "Copiar todos",
      actionLabel__copied: "Copiado!",
      actionLabel__download: "Descarregar .txt",
      actionLabel__print: "Imprimir",
    },
  },
  userButton: {
    action__manageAccount: "Gerir conta",
    action__signOut: "Sair",
    action__signOutAll: "Sair de todas as contas",
    action__addAccount: "Adicionar conta",
  },
  organizationSwitcher: {
    personalWorkspace: "Espaço Pessoal",
    notSelected: "Nenhuma organização selecionada",
    action__createOrganization: "Criar Organização",
    action__manageOrganization: "Gerir Organização",
  },
  impersonationFab: {
    title: "Sessão iniciada como {{identifier}}",
    action__signOut: "Sair",
  },
  organizationProfile: {
    start: {
      headerTitle__members: "Membros",
      headerTitle__settings: "Configurações",
      headerSubtitle__members: "Visualize e gerencie os membros da organização",
      headerSubtitle__settings: "Gerencie as configurações da organização",
    },
    profilePage: {
      title: "Perfil da organização",
      subtitle: "Gerencie o perfil da organização",
      successMessage: "A organização foi atualizada.",
      dangerSection: {
        title: "Perigo",
        leaveOrganization: {
          title: "Sair da organização",
          messageLine1:
            "Tem certeza de que deseja sair desta organização? Você perderá o acesso a esta organização e suas aplicações.",
          messageLine2: "Esta ação é permanente e irreversível.",
          successMessage: "Você saiu da organização.",
        },
      },
    },
    invitePage: {
      title: "Convidar membros",
      subtitle: "Convide novos membros para esta organização",
      successMessage: "Convites enviados com sucesso",
      detailsTitle__inviteFailed:
        "Os convites não puderam ser enviados. Corrija o seguinte e tente novamente:",
      formButtonPrimary__continue: "Enviar convites",
    },
    membersPage: {
      detailsTitle__emptyRow: "Não há membros para exibir",
      action__invite: "Convidar",
      start: {
        headerTitle__active: "Ativos",
        headerTitle__invited: "Convidados",
      },
      activeMembersTab: {
        tableHeader__user: "Usuário",
        tableHeader__joined: "Entrou em",
        tableHeader__role: "Função",
        tableHeader__actions: "",
        menuAction__remove: "Remover membro",
      },
      invitedMembersTab: {
        tableHeader__invited: "Convidado",
        menuAction__revoke: "Revogar convite",
      },
    },
  },
  createOrganization: {
    title: "Criar organização",
    formButtonSubmit: "Criar organização",
    subtitle: "Definir perfil da organização",
    invitePage: {
      formButtonReset: "Pular",
    },
  },
  unstable__errors: {
    form_identifier_not_found: "",
    form_password_pwned: "",
    form_username_invalid_length: "",
    form_param_format_invalid: "",
    form_password_length_too_short: "",
    form_param_nil: "",
    form_code_incorrect: "",
    form_password_incorrect: "",
    not_allowed_access: "",
    form_identifier_exists: "",
  },
  dates: {
    previous6Days:
      "Último(a) {{ date | weekday('pt-PT','long') }} às {{ date | timeString('pt-PT') }}",
    lastDay: "Ontem às {{ date | timeString('pt-PT') }}",
    sameDay: "Hoje às {{ date | timeString('pt-PT') }}",
    nextDay: "Amanhã às {{ date | timeString('pt-PT') }}",
    next6Days:
      "{{ date | weekday('pt-PT','long') }} às {{ date | timeString('pt-PT') }}",
    numeric: "{{ date | numeric('pt-PT') }}",
  },
} as const;
