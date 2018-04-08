import React, { Component } from 'react';
import Simplify from 'simplify-commerce';

import PageContainer from '../components/PageContainer/PageContainer'
import CreditCardForm from '../components/CreditCardForm/CreditCardForm'



import { commerce_pub } from '../constants'

export default class Store extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.client = Simplify.getClient({
            publicKey: 'sbpb_NTQwMjQxNTgtMDI0OC00ZjMxLWFmZTItOGM5N2NlYWZjYTY3',
            privateKey: 'MGOoK/olRt5KBQKj5YuGlG9CUE78U5a5OXdgKHI9fUh5YFFQL0ODSXAOkNtXTToq'
        });
        console.log(this.client);
    }

    render() {
        return (
            <PageContainer>
                <h1>Store</h1>
                <CreditCardForm />
            </PageContainer>
        )
    }
}