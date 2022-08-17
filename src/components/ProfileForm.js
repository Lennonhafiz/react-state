import React, { usestate } from 'react'

function ProfileForm() {
    const [profiles, setProfiles] = usestate({
        
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    })

    const handdler = () => {
            setProfiles((prev) => ({
                ...prev,
                [event.target.name]:event.target.value
        }))
}
const handleForm = (e) => {
    e.preventDefault();
    Submit(profile)
}


return (
    <div className="FormContainer">
        <h3>Profile Form</h3>
        <form>
            <fieldset>Bio data</fieldset>
                <div className="names">
                    <label>First Name
                        <input name="Firstname" value=
                        {profiles.firstname} type="tel" onchange={handler}/>
                    </label>
                    <label>Last Name
                    <Input name="lastname" value=
                    {profile.lastname} type="text" onchange={handler}/>
                    </label>

            </div>
            <div className="names"
            <label>Email
                <input name="email" value=
              {profile.phone} type="email" onChange={handler}/>  
            
            </label>
            <label>phone
                <input name="phone" value=
             {profile.phone}  type="tel" onchange={handler}/> 
            </label>
        </form>
          
      
    </div>
  )
}

export default ProfileForm
