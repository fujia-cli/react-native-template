import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable, TextInput, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAsync} from '@fujia/hooks';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BackButton} from '@/components/BackButton';
import {HeaderLogo} from '@/components/HeaderLogo';
import {MyBottomTabScreenProps, StackRouteNames} from '@/navigator/types';
import {useTimer} from '@/hooks/useTimer';
import {useAppDispatch} from '@/store/hooks';

type CheckStatus = 'Pending' | 'EmailChecked' | 'CodeChecked' | 'PasswordChecked';

export const RegisterScreen = () => {
  const navigation = useNavigation<MyBottomTabScreenProps<'Mine'>['navigation']>();
  const [checkStatus, setCheckStatus] = useState<CheckStatus>('Pending');
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [code, setCode] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const {time, timerStatus, startTiming} = useTimer({start: 60, stop: 1, mode: 'backward'});

  const handleLinkScreen = (screenName: StackRouteNames) => {
    return () => {
      navigation.navigate(screenName);
    };
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmitEmail = () => {
    if (!email) {
      return;
    }
  };

  const handleObtainVerifyCode = () => {
    startTiming();
  };

  const handleSubmitCode = () => {
    setCheckStatus('CodeChecked');
  };

  const handleSubmitPwd = () => {
    setCheckStatus('PasswordChecked');
  };

  const handleRegister = () => {
    if (!email || !password || !code) {
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <BackButton onPress={handleGoBack} />
        <Pressable hitSlop={10} onPress={handleLinkScreen('Login')}>
          <Text style={styles.registerText}>我要登录</Text>
        </Pressable>
      </View>
      <View style={styles.main}>
        <HeaderLogo />
        <TextInput
          spellCheck={false}
          selectionColor="#333"
          placeholderTextColor="#999"
          style={styles.input}
          placeholder="请输入注册邮箱"
          autoCorrect={false}
          textAlign="center"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
          onSubmitEditing={handleSubmitEmail}
        />
        {checkStatus !== 'Pending' && (
          <TextInput
            selectionColor="#333"
            placeholderTextColor="#999"
            keyboardType="numeric"
            returnKeyType="next"
            style={[styles.input, styles.inputPwd]}
            placeholder="请输入邮箱验证码"
            textAlign="center"
            maxLength={6}
            value={code}
            onChangeText={text => setCode(text)}
            onSubmitEditing={handleSubmitCode}
          />
        )}
        {(checkStatus === 'CodeChecked' || checkStatus === 'PasswordChecked') && (
          <TextInput
            secureTextEntry
            selectionColor="#333"
            placeholderTextColor="#999"
            returnKeyType="done"
            autoCapitalize="none"
            textAlign="center"
            maxLength={20}
            style={[styles.input, styles.inputPwd]}
            onChangeText={text => setPassword(text)}
            onSubmitEditing={handleSubmitPwd}
            placeholder="请输入注册密码(6-20位英文或数字)"
          />
        )}
        {checkStatus === 'EmailChecked' && (
          <Pressable style={styles.loginBtn} onPress={handleObtainVerifyCode}>
            {timerStatus === 'timing' ? (
              <>
                <Text style={styles.timeText}>{time}s</Text>
                <Text style={styles.loginBtnText}>后重新获取</Text>
              </>
            ) : (
              <Text style={styles.loginBtnText}>获取验证码</Text>
            )}
          </Pressable>
        )}
        {checkStatus === 'PasswordChecked' && (
          <Pressable style={styles.loginBtn} onPress={handleRegister}>
            <Text style={styles.loginBtnText}>立即注册</Text>
          </Pressable>
        )}
      </View>
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
  input: {
    width: '80%',
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 24,
    backgroundColor: '#f5f5f5',
    fontSize: 16,
    // borderWidth: StyleSheet.hairlineWidth,
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
    marginTop: 32,
    paddingHorizontal: 12,
    borderRadius: 24,
    backgroundColor: '#007fff',
  },
  timeText: {
    color: '#fff',
    width: 28,
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 16,
  },
});
