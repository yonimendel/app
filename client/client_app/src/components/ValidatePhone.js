import 'semantic-ui-css/semantic.min.css';
//import axios from 'axios';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

function PhoneValidate(props) {

    let userPhoneNumber = '';

    const inputPhoneNumber = e => {
        userPhoneNumber = e.target.value;
    }
        

   const performPhoneNumberValidate = () => {
    const qs = new URLSearchParams({
        phone: userPhoneNumber
     });
     fetch('http://localhost:4567/tenant/search?' + qs)
     .then (res => {
         if (res.ok) {
             return res.text();
         } else throw new Error(res.statusText)
     })
     .then(res => console.log(res))
    .catch(err => console.log(err))
   }



    return (
        <div>
            <Input label='Enter phone number to validate tenancy' placeholder='phone number' onChange={inputPhoneNumber}/>
            <Button content='Check Number' onClick = {performPhoneNumberValidate}/>    
        </div>
    )
}

export default PhoneValidate
