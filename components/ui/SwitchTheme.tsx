import { Switch, changeTheme, useTheme } from '@nextui-org/react'
import DarkIcon from '../../public/DarkIcon';
import LightIcon from '../../public/LightIcon';

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
                size='lg'
                onChange={handleChange}
                iconOn={<LightIcon />}
                iconOff={<DarkIcon />}
            />
        </>
    )
}