import config from '../config.json';
import { StyledBanner, StyledHeader } from '../src/styles/StyledHeader';


const Header = () => {
    return(
        <StyledHeader>

            <StyledBanner bg={config.bg} />

            <section className='user-info'>
                <img src={`https://github.com/${config.github}.png`} alt="" />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
            
            
        </StyledHeader>
    )
}

export default Header;