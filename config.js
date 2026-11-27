// === CONFIGURAÇÃO DO SITE · edite só aqui ===
var CONFIG = {
  checkoutBasico:   'https://checkout.applyfy.com.br/checkout/cmwz5ifl4009o01o9q73srxv3?offer=DOCVCJH',   // link do checkout do plano Básico (R$ 27). Vazio = botão rola até os planos
  checkoutCompleto: 'https://checkout.applyfy.com.br/checkout/cmwvgqe0h02c001ol6w8azefv?offer=G5864CK',   // link do checkout do plano Completo (R$ 37). Vazio = botão rola até os planos
  whatsapp: '5537999451520', // número do suporte com DDI e DDD, só números
  email: '',                 // e-mail do suporte (opcional)
  pixel: '2452932315525419',                 // ID do pixel da Meta (só números). Vazio = não carrega
  clarity: 'zif0u0fmmv'              // ID do projeto no Microsoft Clarity
};
CONFIG.suporte = CONFIG.whatsapp
  ? 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent('Olá! Tenho uma dúvida sobre o Mapa da Multa de Radar.')
  : (CONFIG.email ? 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent('Dúvida - Mapa da Multa de Radar') : '#');
