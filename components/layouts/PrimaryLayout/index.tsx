import { FC } from "react"
import PrimaryFooter from "../../navigations/PrimaryFooter"
import PrimaryNavigation from "../../navigations/PrimaryNavigation"

const PrimaryLayout: FC<{menu: any}> = ({children, menu}) => {
    return (
        <>
        <PrimaryNavigation menu={menu} />
        <div>{children}</div>
        <PrimaryFooter />
        </>
    )
} 


export default PrimaryLayout