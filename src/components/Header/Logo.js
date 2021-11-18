const Logo = () => {

  const logoStyles = {
    logoContainer: {
      padding: '0.5rem 1rem',
      backgroundColor: '#FFEB6D',
      borderBottomRightRadius: 12,
      borderTopLeftRadius: 12,
    },
    logoWordmark: {
      fontWeight: 'bold',
    },
  };

  return (
    <div className="logo-container" style={logoStyles.logoContainer}>
      <h1
        className="is-size-6-mobile is-size-5-desktop"
        style={logoStyles.logoWordmark}
      >
        FREELANCE
      </h1>
    </div>
  );
}

export default Logo
