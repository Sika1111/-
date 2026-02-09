// متغيرات لتخزين بيانات العرض المختار مؤقتاً
let selectedOffer = "";
let selectedPrice = "";

// وظيفة فتح لوحة الدفع
function openPaymentPanel(name, price) {
    selectedOffer = name;
    selectedPrice = price;
    document.getElementById('modal-offer-name').innerText = name;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('payment-panel').style.display = 'block';
}

// وظيفة فتح لوحة إدخال رقم الهاتف
function openPhonePanel() {
    closeModal('payment-panel');
    document.getElementById('phone-panel').style.display = 'block';
}

// وظيفة إغلاق اللوحات
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// وظيفة نسخ الأرقام
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("تم نسخ الرقم: " + text);
    });
}

// وظيفة إرسال البيانات إلى واتساب عند النقر على "تحقق"
function sendToWhatsApp() {
    const phone = document.getElementById('customer-phone').value;
    
    if (phone.trim() === "") {
        alert("يرجى إدخال رقم الهاتف أولاً");
        return;
    }

    const currentTime = new Date().toLocaleString('ar-LY');
    const whatsappNumber = "0915061124";
    
    // بناء نص الرسالة
    const message = `طلب جديد 🔔
📦 العرض: ${selectedOffer}
📱 رقم الزبون: ${phone}
⏰ الوقت: ${currentTime}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // فتح الرابط
    window.open(whatsappURL, '_blank');
}

// وظيفة الدعم الفني
function openSupportWhatsApp() {
    const whatsappNumber = "0915061124";
    const message = `مشكلة / دعم ⚠️
📱 رقم المستخدم: 
📝 وصف المشكلة: `;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}

// إغلاق المودال عند النقر خارجه
window.onclick = function(event) {
    const paymentModal = document.getElementById('payment-panel');
    const phoneModal = document.getElementById('phone-panel');
    if (event.target == paymentModal) closeModal('payment-panel');
    if (event.target == phoneModal) closeModal('phone-panel');
}