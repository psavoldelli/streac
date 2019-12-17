import * as React from 'react';
import styled from 'styled-components';
import * as Icons from 'styled-icons/feather';
import { lighten, darken } from 'polished';

const Container = styled.div<{ search: boolean }>`
    position: relative;
    font-weight: 400;
    font-style: normal;
    display: inline-flex;
    margin: 0 12px;

    &.focus > input, & > input:focus {
        border-color: ${(props) => lighten(0.3, props.theme.colors.dark) };
        background: #fff;
        color: rgba(0,0,0,.8);
        box-shadow: none;

        &+svg {
            color: ${(props) => darken(0.1, props.theme.colors.dark) };
            stroke-width: 2px;
        }
    }

    > input {
        color: ${ (props) => props.theme.colors.dark };
        margin: 0;
        max-width: 100%;
        flex: 1 0 auto;
        outline: 0;
        text-align: left;
        line-height: 1em;
        padding-left: 14px;
        padding-right: ${ (props: Props) => props.search ? '34px' : '14px' } ;
        padding-bottom: 6px;
        padding-top: 6px;

        background: #fff;
        border: 1px solid rgba(34,36,38,.15);
        border-radius: ${ (props) => props.search ? '14px' : '6px'};
        box-shadow: none;

        transition: border-color .1s ease,-webkit-box-shadow .1s ease;
        transition: box-shadow .1s ease,border-color .1s ease;
        transition: box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease;


    }
    svg {
        cursor: default;
        position: absolute;
        text-align: center;
        top: 0;
        right: 0;
        margin: 0;
        transition: opacity .3s ease;
        color: #223843;
        height: 100%;
        padding-right: 10px;
    }
`;

const Input = styled.input`
    width: 160px;
`;

interface Props {
    search?: boolean;
    placeholder?: string;
}


const FormInput: React.FC<Props> = (props) => {

    const search = props.search ? (<Icons.Search size='14' />) : null;

    return (
        <Container search={ props.search }>
            <Input placeholder={ props.placeholder } />
            {
                search
            }
        </Container>
    );
};

export default FormInput;
