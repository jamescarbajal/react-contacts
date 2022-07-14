import styled from 'styled-components';

const CardWrapper = styled.div`
    display: flex;
    flex: 1;
    border: 1px solid red:
    margin-top: 2vh;
    `;

    const ContactDetails = styled.div`
    display: flex;
    justify-content: space-between;
    `;

const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <CardWrapper>
        <div>
            <ContactDetails>
                <div>
                    <img src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
                </div>
                <div>
                    <p>{firstName} {lastName}</p>
                    <p>{phoneNumber}</p>
                </div>
            </ContactDetails>
            <div>
                <button>X</button>
            </div>
        </div>
        </CardWrapper>
    )
}

export default ContactCard;