import React from 'react';
import './Certificate.css'; // Make sure to place your CSS file in the same directory as this component or adjust the path accordingly
import NameInputForm from '../Forms/NameInputForm';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Certificate() {
    const [studentName, setStudentName] = useState('Student Name'); // Initialize studentName state

    // Callback function to update studentName
    const handleNameChange = (newName) => {
      setStudentName(newName);
    }; 

    // Function to download the certificate as a PDF
const downloadCertificateAsPdf = () => {
    // Capture the certificate container as an image
    const certificateContainer = document.querySelector('.download-portion');
  
    html2canvas(certificateContainer, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF( );
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
  
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('certificate.pdf');
    });
  };
  

    return (

        <div className="certificate-container">
            <div className="download-portion">
            <div className="certificate">
                <div className="water-mark-overlay"></div>
                <div className="certificate-header">
                    <img src="data:image/jpeg;base64,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" className="logo" alt="" />
                </div>
                <div className="certificate-body">
                    <p className="certificate-title"><strong>HOUSE OF METAZORD</strong></p>
                    <h1>Certificate of Completion</h1>
                    <p className="student-name">{studentName}</p>

                    <div className="certificate-content">
                        <div className="about-certificate">
                            <p>
                                has completed 300 hours on Blockchain Internship on Date 24/06/2023
                            </p>
                        </div>
                        <p className="topic-title">
                            The Blockchain Internship consists of 300 Continuity hours and includes the following:
                        </p>
                        <div className="text-center">
                            <p className="topic-description text-muted">Smart Contract  - Types of blockchain - Distributed ledger  - Ethereum - Decentralized Finance- DeFi Trends
 - Non Fungible Tokens-NFT Market </p>
                        </div>
                    </div>
                    <div className="certificate-footer text-muted">
                        <div className="row">
                            <div className="col-md-6">
                                <p>Director: Pavithra Ragunathan</p>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div  id="accrediated">
                                        <p>
                                            Accredited by 
                                        </p>
                                    </div>
                                        <img id="dsign"  src="https://imgs.search.brave.com/OpEhyLgiPdhA_ir1wEs21nv-zL75Ih4Ch_hqYZAaqZo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RuLndpc2Vz/dGFtcC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDgv/V2FycmVuLUJ1ZmZl/dHQtaGFuZC1TaWdu/YXR1cmUtMS5wbmc" alt="pavithra" />                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <button onClick={downloadCertificateAsPdf} className="submit-button" >Download PDF</button>
            <NameInputForm onNameChange={handleNameChange} />


        </div>
    );
}

export default Certificate;
