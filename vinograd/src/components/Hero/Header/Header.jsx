import {HeaderBlock} from './headerStyles'

const Header = () => {
    return (
        <HeaderBlock>
            <div className="row">
                <div className="col-6">dd</div>
                <div className="col-6"></div>
                <div style={{backgroundColor: '#fff', height: '1px', width: '100%' }}> </div>
            </div>
        </HeaderBlock>
    )
}

export default Header