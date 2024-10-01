const axios = require('axios');

const TOKEN = 'YOUR_ACTUAL_BOT_TOKEN'; // استبدل بهذا بالتوكن الخاص بك

const updateStatus = async () => {
    const url = 'https://discord.com/api/v10/users/@me/settings';

    try {
        const response = await axios.patch(url, {
            status: 'online', // أو 'dnd' أو 'idle'
            activity: {
                name: 'أنا في بث مباشر!', // الرسالة النصية التي تريد عرضها
                type: 1 // نوع النشاط (1 = بث)
            }
        }, {
            headers: {
                'Authorization': `Bot ${TOKEN}`, // تأكد من استخدام علامات الاقتباس المائلة
                'Content-Type': 'application/json',
            },
        });

        console.log('Status updated:', response.data);
    } catch (error) {
        console.error('Error updating status:', error.response ? error.response.data : error.message);
    }
};

updateStatus();
