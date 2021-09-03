import { FC } from "react"
import PrimaryFooter from "../../navigations/PrimaryFooter"
import PrimaryNavigation from "../../navigations/PrimaryNavigation"

const PrimaryLayout: FC<{}> = ({children}) => {
    return (
        <>
        <PrimaryNavigation />
        <div>{children}</div>
        <PrimaryFooter />
        </>
    )
} 


export default PrimaryLayout