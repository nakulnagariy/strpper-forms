import React, { Component } from 'react'
import ContentBanner from '../contentBanner/contentBanner'
import ContentCard from '../contentCard/contentCard'
import CTACard from '../CTACard/CTACard'
import NeedMoreHelp from '../needMoreHelp/needMoreHelp'
import Modal from '../modal/modal'
import {
    icon70, icon80, icon247, iconAccident, iconActivation,
    iconAmbulance, iconAnnualLimit, iconAtm, iconAward, iconBuyEarly,
    iconCalendar, iconCalendar1, iconCamera, iconCacellation, iconCarsAccess,
    iconCat, iconCatDog, iconChat, iconChevronDown, iconChevronRight,
    iconChildren, iconChildrenFree, iconClose, iconCompass, iconContact,
    iconCorporate, iconCouple, iconCover, iconCreditCard, iconCross,
    iconCurrency, iconDental, iconDesktop, iconDog, iconEmail, iconEmergency,
    iconExcess, iconExcessLevel, iconExchangeRate, iconLimited, iconFacebook,
    iconFamily, iconFind, iconFuneral, iconGlobalSim, iconGlobe, iconGrowth,
    iconHealth, iconTooltip, iconHide, iconHome, iconHospital, iconInclusion,
    iconIncome, iconInformation, iconLock, iconLogout, iconLuggage, iconMedical,
    iconMobile, iconMoterCycle, iconMoped, iconMultitrip, iconMyLocation,
    iconOptical, iconPaw, iconPet1, iconPet2, iconPet3, iconPets, iconPlus,
    iconPreExisting, iconPregnancy, iconPrice, iconSearch, iconShow, iconSingle,
    iconSingleParent, iconSnowSports, iconStar, iconTag, iconTakeOff, iconTick,
    iconTick1, iconTree, iconTwitter, iconUpload, iconUseCard, iconWrite,
    iconYoungAdult, iconPdf
} from '../icons/icons'

class About extends Component {
    state = {
        modalState: true,
    }

    handleModal = () => {
        this.setState({
            modalState: !this.state.modalState
        })
    }
    render() {
        const cardOpt = [
            { id: 1, icon: iconWrite, tileTitle: 'Muni Reddy Narahari', tileBody: 'Muni Reddy Narahari is Legal head for Online Legal Associates. Mr. Narahari has worked in.and has been practicing Legal consultancy since 15 years.' },
            { id: 2, icon: iconUseCard, tileTitle: 'Anamika Barnwal', tileBody: 'She loves helping people, making their life more convinient. She has been working into Customer service for more than 6 yrs towards enhancing customer experience.' },
            { id: 3, icon: iconStar, tileTitle: 'Raj Kumar', tileBody: 'Raj has been into professional field for more than 6 years with vast experience into teaching, Video scripting. He loves interacting with people with focus on solutions. Positivity and Smiles is all he care about.' },
            { id: 4, icon: iconTree, tileTitle: 'Nitesh', tileBody: 'Nitesh is a code lover. He has been the sole owner for changing the user experience for RentalAgreement.in, and on process to bring life to many other websites.' },
            { id: 5, icon: iconTick, tileTitle: 'B. M. Chandrashekhar', tileBody: 'There is no problem in going online with rental agreement. This is going to solve many problems for a busy person.' },
        ]

        const ctaOpt = [
            { id: 'cta1', icon: iconSingle, ctaLink: '/step1/', ctaTitle: 'Testimonial' },
            { id: 'cta2', icon: iconSingleParent, ctaLink: '/step1/', ctaTitle: 'Contact Us' },
            { id: 'cta3', icon: iconFamily, ctaLink: '/step1/', ctaTitle: 'Our Services' },
            { id: 'cta4', icon: iconChildren, ctaLink: '/step1/', ctaTitle: 'Process Flow' },
        ]

        const helpOpt = [
            { id: 'n1', helpLink: '/step1/', helpTitle: 'Testimonial' },
            { id: 'n2', helpLink: '/step1/', helpTitle: 'Contact Us' },
            { id: 'n3', helpLink: '/step1/', helpTitle: 'Our Services' },
            { id: 'n4', helpLink: '/step1/', helpTitle: 'Process Flow' },
        ]
        return (
            <React.Fragment>
                <ContentBanner heading="about us" />
                <button className="btn btn-primary" onClick={this.handleModal}>Open Modal</button>
                <ContentCard opts={cardOpt} />
                <CTACard ctaMainHeading="Find health insurance that's right for you" opts={ctaOpt} />
                <NeedMoreHelp
                    nudgeTitle="Need more help"
                    img="./assets/img/help.png"
                    imgAlt="Person cuddling with kid"
                    helpOpt={helpOpt} />
                <Modal modalTitle="This is test modal"
                    modalState={this.state.modalState}
                    closeModal={this.handleModal}>
                    <p>lorem...</p>
                    <button onClick={this.handleModal}>Submit</button>
                </Modal>
            </React.Fragment>
        )
    }
}

export default About;