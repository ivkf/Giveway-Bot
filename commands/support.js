module.exports = {
    name: 'support',
    description: 'يوفر لك رابط سيرفر الدعم',
    execute(message) {
      // رابط سيرفر الدعم
      const supportServerLink = 'https://discord.gg/GmZeekWz';
  
      // الرد على المستخدم
      message.reply(`لزيارة سيرفر الدعم الخاص بنا: ${supportServerLink}`);
    },
  };
  
