import {css} from 'styled-components';

const mixins = {
    flexCenter: css`
        display: center;
        justify-content: center;
        align-items: center;
    `,

    flexBetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    link: css`
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: var(--transition);
        &:hover,
        &:active,
        &:focus {
            color: var(--green);
            outline: 0;
        }
    `,

    inlineLink: css`
        display: inline-block;
    `
}

export default mixins;