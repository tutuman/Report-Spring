import { Component} from '@angular/core';

@Component({
  templateUrl: './patient.component.html',
  styleUrls: []
})
export class PatientComponent {
    title = 'Elctronic Health Record';
    
    patient= [
        {
        'ID' : 1234,
        'FirstName' : 'John',
        'LastName' : 'Smith',
        'MiddleName' : 'Da',
        'DoB' : '10/22/1986',
        'Gender' : 'M',
        'Address': 'xyz',
        'Contact': '999-777-6654'
    },

    {
        "FirstName" : "Max",
        "LastName" : "Roy",
        "MiddleName" : "Id",
        "DoB" : "10/22/1996",
        "Gender" : "F",
        "Address": "qxyz",
        "Contact": "559-777-6654"
    },
    {
            "FirstName" : "JJD",
            "LastName" : "CSD",
            "MiddleName" : "d",
            "DoB" : "10/08/1996",
            "Gender" : "M",
            "Address": "fads.gsls.dljf slsz",
            "Contact": "559-777-6654"
    }
    
    ];

    
    
    }