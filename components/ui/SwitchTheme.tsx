import { Switch, changeTheme, useTheme } from '@nextui-org/react'

export const SwitchTheme = () => {
    const { isDark } = useTheme();

    const handleChange = () => {
        const nextTheme = isDark ? 'light' : 'dark';
        window.localStorage.setItem('data-theme', nextTheme);
        changeTheme(nextTheme);
    }

    return (
        <>
            <Switch
                color='secondary'
                checked={isDark}
                onChange={handleChange}
            />
        </>
    )
}