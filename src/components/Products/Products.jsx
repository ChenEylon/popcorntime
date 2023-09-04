import React from 'react'
import './Products.css'

export const Products = () => {
    return (
        <div>
            <div className='packages-container'>
                <div className='full-package'>
                    <div className="book">
                        <div className='peckage-style' id='basic-package' style={{ direction: 'rtl' }}>
                            <p> <u>מכונת נקניקיות</u>  התכוננו לרענן את האירוע שלכם עם מכונת הנקניקיות שלנו! הכול עניין של הגשת נקניקיות טעימות, בדיוק כמו שאתה אוהב אותן.</p>
                            <p> <u>נקניקיות טעימות בסגנון מזנון:</u> צללו לתוך ארוחת נקניקיות פשוטה אך כל כך טעימה בסגנון מזנון. בחר מתוך מגוון תוספות ותבלינים כדי להתאים אישית את חווית הנקניקיות שלך.</p>
                            <div className='price'>מחיר: המחיר הוא 250 ש"ח לשעתיים+ 100  נקניקיות ! </div>
                        </div>
                        <div className="cover">
                            <h1>מכונת נקניקיות</h1>
                        </div>
                    </div>
                </div>
                <div className='full-package'>
                    <div className="book" id='Young-Pack1'>
                        <div className='peckage-style' id='Young-Pack' style={{ direction: 'rtl' }}> 
                            <p> <u>מכונת פופקורן: </u> התכוננו להיכנס לעולם של טעמים עם מכונת הפופקורן שלנו! זה כוכב התוכנית, שמגיש פופקורן מענג שישאיר את האורחים שלך חשק לעוד.</p>
                            <p> <u>כמות בלתי נגמרת:</u> להנות מפופקורן לאורך כל האירוע, חטיף שכיף לנשנש, בלי להתמלא אף פעם!</p>
                            <div className='price'>מחיר: המחיר הוא 200 ש"ח לשעתיים </div>
                        </div>
                        <div className="cover">
                            <h1>מכונת פופקורן</h1>
                        </div>
                    </div>
                </div>
                <div className='full-package'>
                    <div className="book">
                        <div className='peckage-style' id='all-inclusive' style={{ direction: 'rtl' }}>
                            <p> <u>Crowd-Pleaser:</u> צמר גפן מתוק הוא מועדף אוניברסלי, פונה לאורחים מכל הגילאים והרקעים.</p>
                            <p> <u>פינוק רב-תכליתי: </u>ניתן לסובב צמר גפן מתוק בצבעים וטעמים שונים, ולהוסיף נופך צבעוני וטעים לאירוע שלכם.</p>
                            <p> <u>כיף אינטראקטיבי:</u> צפייה בהכנת צמר גפן מתוק היא פעילות משעשעת בפני עצמה, המשפרת את חווית האירוע הכוללת.</p>
                            <div className='price'>מחיר: המחיר לשעתיים הוא 250 ש"ח.</div>
                        </div>
                        <div className="cover">
                            <h1>מכונת שערות סבתא</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
