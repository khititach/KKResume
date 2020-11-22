
export const DataEn = {
    PersonData: {
        FirstName: 'KHiTiTACH',
        LastName:'KAMJOHN',
        JobPosition:'Web Developer',
        AboutMe:"Hello, I'm AF , Graduated of Naresuan University. I did a project to pay for the food store with student ID card. I am interested in researching and working on for web developers (Backend nodejs) and developing more coding techniques.",
        birth:'AUGUST 16, 1996',
        Address:'406 Moo.4 Tambon Huchang Amphur Banrai Uthai thani 61180'
    },
    Education:{
        PrimarySchool:{
            Name:'Thongprasartwet School',
            Since:'SiNCE : 2002 - 2008',
            Address:'Uthai thani , Nongchang '
        },
        HighSchool:{
            Name:'Nongchangwittaya School',
            Since:'SiNCE : 2008 - 2014',
            Address:'Uthai thani , Nongchang '
        },
        University:{
            Name:'Naresuan University',
            Since:'SiNCE : 2015 - 2020',
            Address:'Phitsanulok'
        }
    },
    Skill:{
        Tools: [
            {
                name:'Vs Code',
                level:'BEGiNNER',
                image:require('../Image/Logo/visual-studio-code.png')
            },
            {
                name:'MongoDB Compass',
                level:'BEGiNNER',
                image:require('../Image/Logo/mongodb-com.png')
            }
        ],
        CodingSkill:[
            {
                name:'HTML',
                level:'iNTERMEDiATE',
                image:require('../Image/Logo/html.png')
            },
            {
                name:'CSS',
                level:'iNTERMEDiATE',
                image:require('../Image/Logo/css.png')
            },
            {
                name:'JavaScript',
                level:'BEGiNNER',
                image:require('../Image/Logo/javascript.png')
            },
            {
                name:'NodeJS',
                level:'BEGiNNER',
                image:require('../Image/Logo/nodejs.png')
            },
            {
                name:'MongoDB',
                level:'BEGiNNER', 
                image:require('../Image/Logo/mongodb.png')
            },
            {
                name:'Bootstrap',
                level:'BEGiNNER',
                image:require('../Image/Logo/bootstrap.png')
            },
            {
                name:'ReactJS',
                level:'LEARNiNG',
                image:require('../Image/Logo/react.png')
            }
        ],
        LanguageSkill:{
            Thai:{
                AllLevel:'ADVANCED',
                Reading:'ADVANCED',
                Writting:'ADVANCED',
                Listening:'ADVANCED',
                Speaking:'ADVANCED'
            },
            English:{
                AllLevel:'LEARNiNG',
                Reading:'LEARNiNG',
                Writting:'LEARNiNG',
                Listening:'LEARNiNG',
                Speaking:'LEARNiNG'
            },
            Japanese:{
                AllLevel:'LEARNiNG',
                Reading:'LEARNiNG',
                Writting:'LEARNiNG',
                Listening:'LEARNiNG',
                Speaking:'LEARNiNG'
            },
        }
    },
    Portfolio:{
        Project:{
            projectName:'E-payment by Student Card',
            explain:"ระบบจ่ายเงินด้วยบัตรนักเรียน",
            image:{
                // flow
                flow:'https://lh3.googleusercontent.com/fife/ABSRlIrjKA3kpqKpmfwY2KMn3Fo5-PaLQ5LXLl3KmMsRFXvtJD-gnZbHASpWj-pYK972PHlHr08ilyOuEdAsHg8EipCH8nYRVCnPJYs7cF0Ts4l7EyD94s1a-2t_uDwZ_RZb5YQti1VYvLcPThnYbniHhZRFgOsan_7VWI6SpWtH7puzywKGfyxDwbsLJt3cJpnjVszFKNwUrnMeJWXhhlfMB0NkjN9_VFE6PdWKO4_bDJuveurqUMVDbyB41HJ927SbRejvL2FCxDHFP_dXdpunV4-eBibjsC4uZJF0u_tIRTVbxmCCpMLxb_FF_hDJlc6BKHY0wXIPMw06OdYYzjlg7yFxc18h3ZIDMi_05sihvL1Cm7SseQqLSXCeZX2TN05elbW6DQ60CHW1sIA0kMM1XEYN3U-pidPnJViuNivaUYQOIwbHNzZtP167MPcUDhc55eXJ8xwfbH0tssnsnCXJ7dTPWm0x681LhgqaQNHrIZNsV6tEtrTOydEI1dr_5Kc1pcAaaCWIvRIhgMNCidLPTZDgz7ja0rSUDfjYxZv-boTanMx4qtUzZQ3O1q8iYHbFNDgWIKK90RMng1hgIykxZLHiBL4IG8CzBccj8FICJ91sDCE6lJZabWDlkGrAoble94NP8tDQjFtRfm5D7Pcz-lt-TQIfQigE_KiEJ3LSXIiY-h2yolX1YFYhw75cYoXGKDhT4JRfQTuzr4Slk4PGY6tpwkxFHVI8IQ=w1600-h767-ft',
                studentImage:[
                    // student
                        // home page
                    require('../Image/Project/student_home_1.jpg'),
                        // hitory page
                    require('../Image/Project/student_history_1.jpg'),                    
                        // hitory page - cal
                    require('../Image/Project/student_history_table_1.jpg'),                     
                       // hitory page - detail bill
                    require('../Image/Project/student_history_table_2.jpg'),                ],
                adminImage:[
                    // admin
                        // home page and top up
                        require('../Image/Project/topup_1.jpg'),                              
                        // reg store page
                        require('../Image/Project/store_register_1.jpg'),                           
                        // view store 
                        require('../Image/Project/view_data_store_1.jpg'),                           
                        // category page - food list
                        require('../Image/Project/admin_category_new_1.jpg'),                           
                        // category page - food add
                        require('../Image/Project/admin_add_category_new_1.jpg'),                   
                    ],
                storeImage:[
                        // store
                        // home page
                        require('../Image/Project/store_sell_food_1.jpg'),                             
                        // hitory page
                        require('../Image/Project/store_history_1.jpg'),                          
                           // hitory page - sell count
                        require('../Image/Project/store_history_sell_count1.jpg'),   
                            // hitory page - bill list
                        require('../Image/Project/store_history_table_1.jpg'),                            
                         // hitory page - bill detail
                        require('../Image/Project/store_history_table_2.jpg')                    
                    ]
            }
        }
    },
    Contact:{
        Facebook:{
            name:'Khititach kamjohn',
            image:require('../Image/Logo/facebook.png')
        },
        Gmail:{
            name:'Khititachk58@nu.ac.th',
            image:require('../Image/Logo/gmail.png')
        },
        Instagram:{
            name:'shirokitsunee',
            image:require('../Image/Logo/instagram.png')
        },
        github:{
            name:'khititach',
            image:require('../Image/Logo/github.png')
        }
    }

}

