import * as React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

import * as Icons from 'styled-icons/feather';
import { StyledIcon as Icon } from 'styled-icons/types';

const Container = styled.span<React.HTMLAttributes<HTMLElement>>`
    display: flex;
    svg {
        padding: 12px;
        &:hover {
            transform: scale(0.8);
            cursor: pointer;
            box-shadow: inset 0px 0px 0px 1px #dcdcdc;
            background: #e8e8e8 radial-gradient(circle,transparent 1%,#e8e8e8 1%) center/15000%;
            border-radius: 24px;
            transition: background 0.4s;

        }
        &:active {
            transform: scale(0.7);
            transition: background 0s;
            background-color: ${lighten(0.2, '#cfcfcf4f' )};
            background-size: 100%;
        }
    }
`;

interface Props {
    rounded?: boolean;
    icon?: Icon;
    label: string;

    onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const Buttons: React.FC<Props> = (props) => {
    const { icon: Symbol, label } = props;

    const render = props.icon ? (<Symbol size={ 24 } />) : (<React.Fragment>{ props.label }</React.Fragment>);

    return (
        <Container onClick={ props.onClick }>
            { render }
        </Container>
    );
};

export default Buttons;
