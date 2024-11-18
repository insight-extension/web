import type { WalletName } from "@solana/wallet-adapter-base";
import { WalletIcon } from "@solana/wallet-adapter-react-ui";
import type {
    CSSProperties,
    FC,
    MouseEvent,
    PropsWithChildren,
    ReactElement,
} from "react";

import { cn } from "../../utils/cn";

interface BaseWalletConnectionButtonProps
    extends PropsWithChildren<{
        className?: string;
        disabled?: boolean;
        endIcon?: ReactElement;
        onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
        style?: CSSProperties;
        tabIndex?: number;
        walletIcon?: string;
        walletName?: WalletName;
    }> {}

export const BaseWalletConnectionButton: FC<
    BaseWalletConnectionButtonProps
> = ({ className, children, endIcon, walletIcon, walletName, ...other }) => {
    const icon =
        walletIcon && walletName ? (
            <WalletIcon
                wallet={{
                    adapter: { icon: walletIcon, name: walletName },
                }}
            />
        ) : undefined;

    return (
        <button className={cn(className)} {...other} type="button">
            <div className="flex gap-2">
                {icon && (
                    <i className="wallet-adapter-button-start-icon">{icon}</i>
                )}

                {children}
            </div>
        </button>
    );
};
