import { Button, Link, useTheme } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export const GithubRepo = () => {

    const { isDark } = useTheme();

    return (
        <Button
            as={Link}
            auto flat ghost
            bordered
            color='gradient'
            href='https://github.com/jeandv/pokedex-next'
            rounded
            target='_blank'>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Icon icon='codicon:github-alt'
                    color={isDark ? 'white' : 'black'}
                    width={25}
                    height={25} />
            </span>
        </Button>
    );
};