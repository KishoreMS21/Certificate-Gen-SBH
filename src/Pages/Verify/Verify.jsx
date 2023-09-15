import React, { useState } from 'react';
import './Verify.css'

const VerificationPage = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleCertificateIdChange = (e) => {
    setCertificateId(e.target.value);
  };

  const handleVerification = (e) => {
    e.preventDefault();

    // Simulate the verification process with dummy data
    // Replace this with your actual verification logic
    const dummyCertificateData = {
      recipientName: 'Keshav',
      organizationName: 'House of Metazord',
      verified: true,
    };

    // Set the verification result
    setVerificationResult(dummyCertificateData);
  };

  return (
    <div className="verification-container">
      <h2>Verify Certificate</h2>
      <form onSubmit={handleVerification}>
        <div className="form-group">
          <label htmlFor="certificateId">Certificate ID:</label>
          <input
            type="text"
            id="certificateId"
            value={certificateId}
            onChange={handleCertificateIdChange}
            required
          />
        </div>
        <button type="submit">Verify</button>
      </form>

      {verificationResult && (
        <div className="verification-result">
          <h3>Verification Result:</h3>
          <p>Certificate : 123456</p>
          <p>Recipient Name: {verificationResult.recipientName}</p>
          <p>Organization Name: {verificationResult.organizationName}</p>
          <p>{verificationResult.verified ? 'Verified' : 'Not Verified'}</p>
          {/* Add more certificate details here */}
        </div>
      )}
    </div>
  );
};

export default VerificationPage;
