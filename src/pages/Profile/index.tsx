import { useMediaQuery } from 'atomic-layout';
import { useAuth } from '../../contexts/authProvider';
import {
  CardBordered,
  CardBorderedContent,
  GridTemplate,
} from '../../styles/global';
import FormProfile from './form-profile';
import md5 from 'md5';
import { ImageProfile } from './styles';
import { DirectionalContainer } from '../../styles/DirectionalContainer';

const Profile = () => {
  const { user } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <CardBordered>
      <CardBorderedContent>
        <GridTemplate
          customColumns={isMobile ? '1fr' : '1fr 2.5fr '}
          gap={isMobile ? '1rem' : '3rem '}
        >
          <DirectionalContainer
            height
            align={isMobile ? 'center' : 'flex-start'}
          >
            <ImageProfile
              src={`https://www.gravatar.com/avatar/${md5(
                user?.email ?? ''
              )}?d=retro&s=${isMobile ? 280 : 350}`}
            />
          </DirectionalContainer>

          <FormProfile />
        </GridTemplate>
      </CardBorderedContent>
    </CardBordered>
  );
};
export default Profile;
