'use client';
import { useRouter } from 'next/navigation';
import { dataSite, navData } from '@/data';
import { Navbar as NavbarV2, theme } from 'ecommerce-mxtech';

const Navbar = () => {
  const router = useRouter();

  return (
    <NavbarV2
      linksProps={{
        variant: 'underline',
        align: 'left',
      }}
      textColor='black'
      withLogo={true}
      imageProps={{
        src: dataSite.iconImage,
        className: 'w-20',
      }}
      styleTitle={{
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
      }}
      links={navData}
      onClickProduct={(product) => {
        router.push(`/product/${product.id}`);
      }}
      buttonCartProps={{
        onClick: () => router.push('/my-cart'),
      }}
      buttonContactProps={{
        onClick: () => router.push('/more-information'),
      }}
      onRedirect={(path) => router.push(path)}
      styleHeader={{
        height: 100,
        color: 'black',
      }}
    />
  );
};

export default Navbar;
