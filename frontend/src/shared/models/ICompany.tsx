export interface ICompany {
    readonly id?: string;
    companyName: string;
    welcomeText: string;
    street: string;
    additionalInformation: string;
    postCode: string;
    city: string;
    state: string;
    email: string;
    phone: string;
    homepageLink: string;
    instagramLink: string;
    facebookLink: string;
    tikTokLink: string;
    youtubeLink: string;
    mondayOpen: Date | null;
    mondayClose: Date | null;
    tuesdayOpen: Date | null;
    tuesdayClose: Date | null;
    wednesdayOpen: Date | null;
    wednesdayClose: Date | null;
    thursdayOpen: Date | null;
    thursdayClose: Date | null;
    fridayOpen: Date | null;
    fridayClose: Date | null;
    saturdayOpen: Date | null;
    saturdayClose: Date | null;
}
