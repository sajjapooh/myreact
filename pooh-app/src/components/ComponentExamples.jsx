import React from 'react';

// === Function Components - วิธีที่แนะนำ ===

// 1. Simple Function Component
// Component = JavaScript function ที่ return JSX
function Welcome() {
    return <h1>ยินดีต้อนรับสู่ React! 🎉</h1>;
}

// 2. Arrow Function Component
// เขียนแบบ arrow function ก็ได้ (นิยมมาก)
const Greeting = () => {
    return (
        <div>
            <h2>สวัสดี React Developer! 👋</h2>
            <p>มาสร้างสิ่งที่น่าทึ่งด้วยกัน</p>
        </div>
    );
};

// 3. Component ที่มี Logic
const Clock = () => {
    // สามารถมี JavaScript logic ก่อน return
    const now = new Date();
    const timeString = now.toLocaleTimeString('th-TH');
    const dateString = now.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });
    
    // Return JSX
    return (
        <div>
            <h3>🕐 เวลาปัจจุบัน</h3>
            <p>{dateString}</p>
            <p>{timeString}</p>
        </div>
    );
};

// 4. Component Composition - การประกอบ Components
// คิดเหมือนตัวต่อ LEGO - เอา component เล็กๆ มาประกอบเป็นของใหญ่

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://via.placeholder.com/50" 
        alt="Avatar" 
        style={{borderRadius: '50%', width: '50px', height: '50px'}}
    />
);

const UserName = () => (
    <h4>สมชาย ใจดี</h4>
);

const UserBio = () => (
    <p>นักพัฒนา React มือใหม่ที่กำลังเรียนรู้</p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{border: '1px solid #ccc', padding: '20px', borderRadius: '8px'}}>
            {/* ใช้ component เหมือน HTML tag */}
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

// 5. Component ที่ซับซ้อนขึ้น - Todo List
const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'เรียน React พื้นฐาน', completed: true },
        { id: 2, text: 'ทำความเข้าใจ Components', completed: true },
        { id: 3, text: 'ฝึก Props และ State', completed: false },
        { id: 4, text: 'สร้างโปรเจคจริง', completed: false }
    ];
    
    // คำนวณสถิติ
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div>
            <h3>📝 รายการที่ต้องทำ</h3>
            
            {/* Progress Bar */}
            <div style={{backgroundColor: '#f0f0f0', borderRadius: '10px', padding: '5px', margin: '10px 0'}}>
                <div 
                    style={{
                        backgroundColor: '#4caf50', 
                        width: `${percentage}%`, 
                        textAlign: 'center', 
                        borderRadius: '5px',
                        color: 'white',
                        padding: '5px 0'
                    }}
                >
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <ul style={{listStyle: 'none', padding: 0}}>
                {todos.map(todo => (
                    <li 
                        key={todo.id}
                        style={{
                            padding: '10px',
                            margin: '5px 0',
                            backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <span style={{marginRight: '10px'}}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                            {todo.text}
                        </span>
                    </li>
                ))}
            </ul>
            
            {/* Summary */}
            <div style={{marginTop: '20px', textAlign: 'center', color: '#666'}}>
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

// 6. Main Component ที่รวมทุกอย่าง
function ComponentExamples() {
    return (
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
            <h1>ตัวอย่าง React Components</h1>
            
            <section style={{marginBottom: '30px', padding: '20px', border: '1px solid #eee', borderRadius: '8px'}}>
                <h2>Simple Components</h2>
                <Welcome />
                <Greeting />
            </section>
            
            <section style={{marginBottom: '30px', padding: '20px', border: '1px solid #eee', borderRadius: '8px'}}>
                <h2>Component with Logic</h2>
                <Clock />
            </section>
            
            <section style={{marginBottom: '30px', padding: '20px', border: '1px solid #eee', borderRadius: '8px'}}>
                <h2>Component Composition</h2>
                <UserCard />
            </section>
            
            <section style={{marginBottom: '30px', padding: '20px', border: '1px solid #eee', borderRadius: '8px'}}>
                <h2>Complex Component</h2>
                <TodoList />
            </section>
            
            <section style={{padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
                <h3>💡 Tips:</h3>
                <ul>
                    <li>แยก component ให้เล็กและทำหน้าที่เดียว</li>
                    <li>ตั้งชื่อให้สื่อความหมาย</li>
                    <li>ใช้ composition แทน inheritance</li>
                    <li>Keep it simple!</li>
                </ul>
            </section>
        </div>
    );
}

export default ComponentExamples;