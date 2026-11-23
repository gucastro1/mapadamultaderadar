// === CONFIGURAÇÃO DO SITE · edite só aqui ===
var CONFIG = {
  checkoutBasico:   '',   // link do checkout do plano Básico (R$ 27). Vazio = botão rola até os planos
  checkoutCompleto: '',   // link do checkout do plano Completo (R$ 37). Vazio = botão rola até os planos
  whatsapp: '5537999451520', // número do suporte com DDI e DDD, só números
  email: '',                 // e-mail do suporte (opcional)
  pixel: '',                 // ID do pixel da Meta (só números). Vazio = não carrega
  clarity: ''                // ID do projeto no Microsoft Clarity
};
CONFIG.suporte = CONFIG.whatsapp
  ? 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent('Olá! Tenho uma dúvida sobre o Mapa da Multa de Radar.')
  : (CONFIG.email ? 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent('Dúvida - Mapa da Multa de Radar') : '#');
