import React from 'react'
import PersonalInformation from './PersonalInformation'
import ProfessionalInformation from './ProfessionalInformation'
import Education from './Education'
import Skills from './Skills'
import Certification from './Certification'
import Languages from './Languages'
import SocialLinks from './SocialLinks'
import Resume from './Resume'
import Experience from './Experience'

const Profile = ({handleExperienceArrayItemChange, addExperienceArrayItem, removeExperienceArrayItem, addEducationArrayItem,addCertificationArrayItem,addLangugeArrayItem,addSkillArrayItem,removeEducationArrayItem,handleEducationArrayItemChange,isEditing,removeCertificateArrayItem,removeSkillArrayItem,handleCertificationArrayItemChange,handleSkillsArrayItemChange, candidateData, handleInputChange, errors, removeArrayItem, addArrayItem, handleArrayItemChange ,removeLanguageArrayItem,handleLanguageArrayItemChange}) => {
    return (
        <div>
            <PersonalInformation isEditing={isEditing} candidateData={candidateData} handleInputChange={handleInputChange} errors={errors} />
            <ProfessionalInformation isEditing={isEditing} candidateData={candidateData} handleInputChange={handleInputChange} errors={errors} />
            <Education isEditing={isEditing} candidateData={candidateData} handleInputChange={handleInputChange} errors={errors} removeArrayItem={removeArrayItem}
                addArrayItem={addArrayItem}
                handleArrayItemChange={handleArrayItemChange}
                removeEducationArrayItem={removeEducationArrayItem}
                handleEducationArrayItemChange={handleEducationArrayItemChange}
                addEducationArrayItem={addEducationArrayItem}
                />
                <Experience handleExperienceArrayItemChange={handleExperienceArrayItemChange}
                            addExperienceArrayItem={addExperienceArrayItem}
                            removeExperienceArrayItem={removeExperienceArrayItem}
                            isEditing={isEditing} candidateData={candidateData}/>
            <Skills isEditing={isEditing} removeSkillArrayItem={removeSkillArrayItem} candidateData={candidateData} handleInputChange={handleInputChange} errors={errors} removeArrayItem={removeArrayItem}
                addArrayItem={addArrayItem}
                handleArrayItemChange={handleArrayItemChange}
                handleSkillsArrayItemChange={handleSkillsArrayItemChange}
                addSkillArrayItem={addSkillArrayItem}
                 />
            <Certification isEditing={isEditing} candidateData={candidateData} handleInputChange={handleInputChange} errors={errors} removeArrayItem={removeArrayItem}
                addArrayItem={addArrayItem}
                handleArrayItemChange={handleArrayItemChange} 
                removeCertificateArrayItem={removeCertificateArrayItem}
                handleCertificationArrayItemChange={handleCertificationArrayItemChange}
                addCertificationArrayItem={addCertificationArrayItem}
                />
                
            <Languages isEditing={isEditing} candidateData={candidateData} handleInputChange={handleInputChange} errors={errors} removeArrayItem={removeArrayItem}
                addArrayItem={addArrayItem}
                handleArrayItemChange={handleArrayItemChange}
                removeLanguageArrayItem={removeLanguageArrayItem}
                handleLanguageArrayItemChange={handleLanguageArrayItemChange}
                addLangugeArrayItem={addLangugeArrayItem}/>
            <SocialLinks isEditing={isEditing} candidateData={candidateData} handleInputChange={handleInputChange} errors={errors} removeArrayItem={removeArrayItem}
                addArrayItem={addArrayItem}
                handleArrayItemChange={handleArrayItemChange} />
                <Resume handleInputChange={handleInputChange} candidateData={candidateData} isEditing={isEditing} errors={errors} />
        </div>
    )
}

export default Profile
