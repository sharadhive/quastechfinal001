# PowerShell script to update all course pages with WhatsApp form integration

$coursePages = @(
    @{file="ManualTesting.tsx"; name="Manual Testing"},
    @{file="SeleniumTesting.tsx"; name="Selenium Automation Testing"},
    @{file="ISTQBCertification.tsx"; name="ISTQB Certification"},
    @{file="FullStackWebDevelopment.tsx"; name="Full Stack Web Development"},
    @{file="JavaDevelopmentTraining.tsx"; name="Java Development Training"},
    @{file="PythonDevelopmentTraining.tsx"; name="Python Development Training"},
    @{file="FullStackDotNetDevelopment.tsx"; name="Full Stack .Net Development"},
    @{file="MERNStackDevelopment.tsx"; name="MERN Stack Development"},
    @{file="MeanStackDevelopment.tsx"; name="MEAN Stack Development"},
    @{file="ReactTraining.tsx"; name="React JS Development"},
    @{file="AngularTraining.tsx"; name="Angular Development"},
    @{file="WebDesigningTraining.tsx"; name="Web Designing Training"},
    @{file="DataScienceWithPython.tsx"; name="Data Science & Analytics"},
    @{file="BigDataEngineering.tsx"; name="Big Data Engineering"},
    @{file="RPATraining.tsx"; name="RPA Training"},
    @{file="DataAnalysisVisualization.tsx"; name="Data Analysis & Visualization"},
    @{file="ManagementInformationSystems.tsx"; name="Management Information Systems"},
    @{file="AIDataAnalytics.tsx"; name="AI & Data Analytics"},
    @{file="DigitalMarketing.tsx"; name="Digital Marketing"},
    @{file="InformationTechnologyProgramme.tsx"; name="Information Technology Programme"},
    @{file="GraphicDesigning.tsx"; name="Graphic Designing"},
    @{file="FinancialAccounting.tsx"; name="Financial Accounting"},
    @{file="Accounting.tsx"; name="Accounting"},
    @{file="Taxation.tsx"; name="Taxation"},
    @{file="BCA.tsx"; name="BCA"},
    @{file="QuastechDegreeProgram.tsx"; name="Quastech Degree Program"},
    @{file="FullStackJavaDevelopment.tsx"; name="Full Stack Java Development"}
)

$oldCode = @'
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
'@

foreach ($course in $coursePages) {
    $filePath = "src\pages\$($course.file)"
    
    if (Test-Path $filePath) {
        Write-Host "Updating $($course.file)..." -ForegroundColor Cyan
        
        $newCode = @"
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with all form details
    const whatsappMessage = ``*New Counselling Session Request*

👤 *Name:* `${formData.name}
📧 *Email:* `${formData.email}
📱 *Phone:* `${formData.phone}
💬 *Message:* `${formData.message || 'No additional message'}
📚 *Course Page:* $($course.name)

I am interested in booking a free counselling session. Please contact me at your earliest convenience.``;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "918422800381";
    const whatsappURL = ``https://wa.me/`${whatsappNumber}?text=`${encodedMessage}``;
    
    console.log("📱 Sending Counselling Request to WhatsApp:", whatsappMessage);
    const whatsappWindow = window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    
    if (whatsappWindow) {
      toast({
        title: "✅ WhatsApp Opened!",
        description: "Your counselling request is ready in WhatsApp. Just click Send!",
      });
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 2000);
    } else {
      toast({
        title: "⚠️ Allow Popups",
        description: "Please allow popups to send your request via WhatsApp",
        variant: "destructive"
      });
      window.location.href = whatsappURL;
    }
  };
"@
        
        $content = Get-Content $filePath -Raw
        $content = $content -replace [regex]::Escape($oldCode), $newCode
        Set-Content $filePath -Value $content -NoNewline
        
        Write-Host "✅ Updated $($course.file)" -ForegroundColor Green
    } else {
        Write-Host "⚠️  File not found: $filePath" -ForegroundColor Yellow
    }
}

Write-Host "`n🎉 All course pages updated with WhatsApp integration!" -ForegroundColor Green

