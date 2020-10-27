import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './index.css';


import React from 'react';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';


function Navbar(){

    const items = [
        {
            label:'File',
            
        },
        {
            label:'Edit',
            
        },
        {
            label:'Users',
            
        },
        {
            
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        separator:true
                     },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                },
                {
                    label:'Archieve',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                        
                    }
                    ]
                }
            ]
        }
    ];
    

    return (
        <div id="n">
            <Menubar id="nav" model={items}>
                
            </Menubar>
        </div>
    );
}
                
export default Navbar;