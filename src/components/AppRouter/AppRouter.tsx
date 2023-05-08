import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RoutePath, publicRoutes } from '../../router'

const AppRouter: FC = () => {
    return (
        <Routes>
            {
                publicRoutes.map((route) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                )
            }
            <Route path='/' element={<Navigate to={RoutePath.HOME} />} />
            <Route path='/*' element={<Navigate to={RoutePath.ERROR} />} />
        </Routes>
    )
}

export default AppRouter