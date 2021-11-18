import Image1 from '../../assets/media/images/users/user-1.png';

//todo: fetch these from backend server... php api endpoint!

const UsersData = [
  {
    'userId' : 1,
    'userName' : 'Hussein Kizz',
    'userRole' : 'Graphics Designer',
    'UserCategory': 'It Professional',
    'userPhoto' : Image1,
    'userLocation' : 'Kampala',
    'userProfileViews': 32,
    'userDescription': 'With my experience in graphics designing, I can design logos, stickers, flyers, and burners or help you bring your new brand from ground up.'
  },
  {
    'userId' : 2,
    'userName' : 'John Doe',
    'userRole' : 'Senior Frontend Engineer',
    'UserCategory': 'It Professional',
    'userPhoto' : Image1,
    'userLocation' : 'Wakiso',
    'userProfileViews': 12,
    'userDescription': 'I can design highend web interface and user experience for your existing or next project'
  },
]

export default UsersData;