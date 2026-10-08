/*************************************************************************
         (C) Copyright AudioLabs 2017 

This source code is protected by copyright law and international treaties. This source code is made available to You subject to the terms and conditions of the Software License for the webMUSHRA.js Software. Said terms and conditions have been made available to You prior to Your download of this source code. By downloading this source code You agree to be bound by the above mentionend terms and conditions, which can also be found here: https://www.audiolabs-erlangen.de/resources/webMUSHRA. Any unauthorised use of this source code may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible under law. 

# Third-Party Modified Version of the webMUSHRA Software
# This page was made for an MMT thesis project on spatial audio. 
# Alterations by Emma Chatto uploaded to GitHub 8.10.2026.
# See LICENSE for the complete webMUSHRA software licence.

**************************************************************************/

function BS1116Rating() {
  this.reference = null;
  this.nonReference = null;
  this.thirdQuestion = null;

  this.audioA = null;
  this.audioB = null;

  this.referenceScore = null; 
  this.nonReferenceScore = null;
  this.thirdQuestionScore = null; 
  
  this.comment = null;
  this.time = null;
  this.sliders = null;
}
