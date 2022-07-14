import styled from 'styled-components';

const CardWrapper = styled.div`
    display: flex;
    jusify-content: space-evenly;
    flex: 1;
    border: 1px solid red;
    margin-top: 2vh;
    padding: 2vh 1vw 2vh 1vw;
    max-height: 10vh;
    `;

    const ContactDetails = styled.div`
    display: flex;
    justify-content: space-evenly;
    border: 1px solid black;
    `;

    const CloseButton = styled.div`
    display: flex;
    flex: 1;
    align-self: center;
    justify-content: flex-end;
    `;

    const ProfilePic = styled.img`
    border-radius: 50%;
    max-height: 100%;
    `;

const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <CardWrapper onClick={() => console.log("Hello, world.")}>
            <ContactDetails>
                <div>
                    <ProfilePic src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
                </div>
                <div>
                    <p>{firstName} {lastName}</p>
                    <p>{phoneNumber}</p>
                </div>
            </ContactDetails>
            <CloseButton>
                <button onClick={() => null}>X</button>
            </CloseButton>
        </CardWrapper>
    )
}

export default ContactCard;