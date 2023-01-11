import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
        <header>
            <NavLink to="/" className='main_btn'><span>Задание 1</span></NavLink>  
            <NavLink to="/task2" className='main_btn'><span>Задание 2</span></NavLink>  
            <NavLink to="/task3" className='main_btn'><span>Задание 3</span></NavLink>  
            <NavLink to="/task4" className='main_btn'><span>Задание 4</span></NavLink>  
        </header>
        <div className="main_content">
            <Outlet />
        </div>
        </>
    )
}

export {Layout}