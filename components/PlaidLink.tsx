import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import {PlaidLinkOnSuccess, PlaidLinkOptions} from 'react-plaid-link'
import { useRouter } from 'next/router';
import { createLinkToken } from '@/lib/actions/user.actions';

const PlaidLink = ({user, variant}: PlaidLinkProps) => {
    const router=useRouter();

    const [token, setToken] = useState('');

    useEffect(()=> {
        cost getLinkToken = async () => {
            const data = await createLinkTokeninkToken(user);

            setToken(data?.linkToken);
        }

        getLinkToken();
    }, [user]);


    const onSuccess = useCallback<PlaidLinkOnSuccess>(async 
        (public_token: string) => {
        // await exchangePublicToken({
        //     publicToken: public_token,
        //     user,
        // })

        router.push('/');
    },[user])

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }

    const {open, ready} = usePlaidLink(config);

  return (
    <>
        {variant==='primary' ? (
            <Button
                onClic={() => open()}
                disabled={!ready}
                className="plaidlink-primary">
                Connect bank
            </Button>
        ): variant === 'ghost' ? (
            <Button>
                Connect bank
            </Button>
        ): (
            <Button>
                Connect bank
            </Button>
        )}
    </>
  )
}

export default PlaidLink