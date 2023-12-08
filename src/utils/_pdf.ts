// Decode Base64 string and create a Blob
function base64toBlob(base64: string): Blob {
    const binaryString = atob(base64);
    const byteArray = new Uint8Array(binaryString.length);
  
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }
  
    return new Blob([byteArray], { type: 'application/pdf' });
  }
  
  // Create a download link and trigger the download
 export function downloadPDF(base64String: string, filename: string): void {
    const blob = base64toBlob(base64String);
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    
    // Append the anchor to the body (you may want to append it to a different element)
    document.body.appendChild(a);
  
    // Trigger the click event to start the download
    a.click();
  
    // Remove the anchor from the DOM
    document.body.removeChild(a);
  
    // Revoke the Blob URL to free up resources
    URL.revokeObjectURL(url);
  }
  
  // Example usage
  const base64String = "your_base64_string_here";
  const filename = "example.pdf";
  downloadPDF(base64String, filename);
  