# Fix remaining pages with WhatsApp integration

$pages = @(
    @{file="DataWarehousing.tsx"; name="Data Warehousing"},
    @{file="AutomationAnywhere.tsx"; name="Automation Anywhere"},
    @{file="UiPathTraining.tsx"; name="UiPath Training"},
    @{file="BluePrism.tsx"; name="Blue Prism"},
    @{file="MachineLearning.tsx"; name="Machine Learning"},
    @{file="DeepLearning.tsx"; name="Deep Learning"},
    @{file="HadoopTraining.tsx"; name="Hadoop Training"},
    @{file="ApacheSpark.tsx"; name="Apache Spark"},
    @{file="ETLDevelopment.tsx"; name="ETL Development"},
    @{file="AdvancedJava.tsx"; name="Advanced Java"},
    @{file="SpringBootTraining.tsx"; name="Spring Boot Training"},
    @{file="VueJSTraining.tsx"; name="Vue.JS Training"}
)

foreach ($page in $pages) {
    $filePath = "src\pages\$($page.file)"
    
    if (Test-Path $filePath) {
        Write-Host "Updating $($page.file)..." -ForegroundColor Cyan
        
        $content = Get-Content $filePath -Raw
        
        # Pattern to match the old handleFormSubmit
        $oldPattern = 'const handleFormSubmit = \(e: React\.FormEvent\) => \{ e\.preventDefault\(\); toast\(\{ title: "Enquiry Submitted!" \}\); setFormData\(\{ name: "", email: "", phone: "", message: "" \}\); \};'
        
        $newCode = @"
const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = ``*New Counselling Session Request*\n\n👤 *Name:* `${formData.name}\n📧 *Email:* `${formData.email}\n📱 *Phone:* `${formData.phone}\n💬 *Message:* `${formData.message || 'No additional message'}\n📚 *Course Page:* $($page.name)\n\nI am interested in booking a free counselling session. Please contact me at your earliest convenience.``;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = ``https://wa.me/918422800381?text=`${encodedMessage}``;
    const whatsappWindow = window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    if (whatsappWindow) {
      toast({ title: "✅ WhatsApp Opened!", description: "Your counselling request is ready in WhatsApp. Just click Send!" });
      setTimeout(() => { setFormData({ name: "", email: "", phone: "", message: "" }); }, 2000);
    } else {
      toast({ title: "⚠️ Allow Popups", description: "Please allow popups to send your request via WhatsApp", variant: "destructive" });
      window.location.href = whatsappURL;
    }
  };
"@
        
        $content = $content -replace $oldPattern, $newCode
        Set-Content $filePath -Value $content -NoNewline
        
        Write-Host "✅ Updated $($page.file)" -ForegroundColor Green
    } else {
        Write-Host "⚠️  File not found: $filePath" -ForegroundColor Yellow
    }
}

Write-Host "`n🎉 All remaining pages updated with WhatsApp integration!" -ForegroundColor Green

