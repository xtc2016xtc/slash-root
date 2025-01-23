import { Outlet } from 'react-router-dom';

const RootLayout = () => {

    return (
        <div id="_layout">
            <Outlet />
        </div>
    );
};

export default RootLayout;