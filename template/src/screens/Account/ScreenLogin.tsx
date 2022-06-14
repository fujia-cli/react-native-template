import React, {useState, useRef} from 'react';
import {Text, View, StyleSheet, Pressable, TextInput, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAsync} from '@fujia/hooks';
import {SafeAreaView} from 'react-native-safe-area-context';

import {IconWeixin, IconSelect} from '@/assets/icons';
import {BackButton} from '@/components/BackButton';
import {HeaderLogo} from '@/components/HeaderLogo';
import {RootStackScreenProps, StackRouteNames} from '@/navigator/types';
import {asyncSignIn} from './service.account';
import {useAppDispatch} from '@/store/hooks';

export const LoginScreen = () => {
  const navigation = useNavigation<RootStackScreenProps<'Login'>['navigation']>();
  const [account, setAccount] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [agreed, setAgreed] = useState(false);
  const [loginErr, setLoginErr] = useState('');
  const pwdRef = useRef<TextInput | null>(null);
  const {run, isLoading} = useAsync();

  const disabledLogin = !agreed || !account || !password;

  const handleLinkScreen = (screenName: StackRouteNames) => {
    return () => {
      navigation.navigate(screenName);
    };
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleEndEditingAccount = () => {
    if (account) {
      pwdRef.current?.focus();
    }
  };

  const handleAgree = () => {
    setAgreed(!agreed);
  };

  const handleChangeAccount = (val: string) => {
    if (loginErr) {
      setLoginErr('');
    }
    setAccount(val);
  };

  const handleChangePwd = (val: string) => {
    if (loginErr) {
      setLoginErr('');
    }
    setPassword(val);
  };

  const handleLogin = () => {
    if (!account || !password) {
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <BackButton onPress={handleGoBack} />
        <Pressable hitSlop={10} onPress={handleLinkScreen('Register')}>
          <Text style={styles.registerText}>立即注册</Text>
        </Pressable>
      </View>
      <View style={styles.main}>
        <HeaderLogo />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            selectionColor="#333"
            autoCapitalize="none"
            spellCheck={false}
            textAlign="center"
            onChangeText={handleChangeAccount}
            onEndEditing={handleEndEditingAccount}
            placeholder="请输入邮箱/用户名"
          />
          <TextInput
            ref={pwdRef}
            style={[styles.input, styles.inputPwd]}
            returnKeyType="done"
            autoCapitalize="none"
            selectionColor="#333"
            textAlign="center"
            secureTextEntry
            maxLength={20}
            onChangeText={handleChangePwd}
            placeholder="请输入密码"
          />
          {!!loginErr && <Text style={styles.errMsg}>{loginErr}</Text>}
        </View>
        <View style={styles.agreement}>
          <Pressable
            style={styles.selection}
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 6,
              right: 6,
            }}
            onPress={handleAgree}>
            <IconSelect color={agreed ? '#007fff' : '#999'} />
          </Pressable>
          <Text style={styles.agreementText}>我已阅读并同意</Text>
          <Pressable onPress={handleLinkScreen('UserAgreement')}>
            <Text style={[styles.agreementText, styles.agreementItem]}>"用户协议"</Text>
          </Pressable>
          <Text style={styles.agreementText}>和</Text>
          <Pressable onPress={handleLinkScreen('PrivacyPolicy')}>
            <Text style={[styles.agreementText, styles.agreementItem]}>"隐私政策"</Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.loginBtn, disabledLogin ? styles.disabled : null]}
          disabled={disabledLogin}
          onPress={handleLogin}>
          {isLoading && <ActivityIndicator size="small" color="#fff" style={styles.indicator} />}
          <Text style={styles.loginBtnText}>立即登录</Text>
        </Pressable>
      </View>
      {/* <View style={styles.footer}>
        <View style={styles.separator}>
          <Text style={styles.separatorText}>其它方式登录</Text>
        </View>
        <View style={styles.thirdPart}>
          <IconWeixin size={32} />
        </View>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  registerText: {
    color: '#007fff',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
  },
  form: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 24,
  },
  errMsg: {
    position: 'absolute',
    bottom: 0,
    fontSize: 13,
    color: '#e74135',
  },
  input: {
    width: '80%',
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 24,
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    fontSize: 16,
  },
  inputPwd: {
    marginTop: 16,
  },
  loginBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 48,
    marginTop: 16,
    paddingHorizontal: 12,
    borderRadius: 24,
    backgroundColor: '#007fff',
  },
  disabled: {
    backgroundColor: '#999',
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  indicator: {
    marginRight: 6,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 32,
  },
  agreement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  selection: {
    marginRight: 6,
  },
  agreementText: {
    color: '#333',
    fontSize: 12,
  },
  agreementItem: {
    color: '#007fff',
  },
  separator: {
    width: '72%',
    marginTop: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#999',
    alignItems: 'center',
  },
  separatorText: {
    width: '50%',
    marginBottom: -8,
    backgroundColor: '#fff',
    color: '#666',
    textAlign: 'center',
  },
  thirdPart: {
    alignItems: 'center',
    marginTop: 24,
  },
});
