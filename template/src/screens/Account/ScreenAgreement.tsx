import React from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const UserAgreementScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <Text style={styles.text}>
          如果您选择接受该协议条款，即表示您同意接受协议各项条件的约束。如果您不同意本服务条款，则不能获得使用本协议的权利。如果您违反本条款规定，本产品有权随时中止或终止您对产品的使用资格并保留追究相关法律责任的权利。
        </Text>
        <Text style={styles.title}>一，产品保护条款</Text>
        <Text style={styles.text}>
          1、产品是归属付佳个人版权所有。产品的一切版权以及与产品相关的所有信息内容，包括但不限于：文字表述及其组合、图标、图饰、图表、色彩、版面设计、数据、印刷材料、或电子文档等均受著作权法和国际著作权条约以及其他知识产权法律法规的保护。
        </Text>
        <Text style={styles.text}>
          2、使用本协议产品涉及到互联网服务，可能会受到各个环节不稳定因素的影响。因此服务存在不可抗力、计算机病毒或黑客攻击、系统不稳定、用户所在位置、用户关机以及其他任何技术、互联网络、通信线路原因等造成的服务中断或不能满足用户要求的风险。您须承担以上风险，本站不作担保。
        </Text>
        <Text style={styles.text}>
          3、如果系统发生故障影响到本协议的正常运行，我们承诺在第一时间及时处理进行修复。如果因此对您造成经济损失，我们不承担任何责任。
        </Text>
        <Text style={styles.text}>
          4、使用该协议必须遵守国家有关法律和政策等，维护国家利益，保护国家安全，并遵守本条款，如果您违法或违反本条款的使用(包括但不限于言论发表、传送等)而引起的一切责任，将由您负全部责任，概与我们及合作单位无关，导致损失的，我们及合作单位有权要求赔偿，并有权立即停止向其提供服务，保留相关记录，并保留配合司法机关追究法律责任的权利。
        </Text>
        <Text style={styles.text}>
          5、您同意个人隐私信息是指那些能够对您进行个人辨识或涉及个人通信的信息，包括下列信息：您的姓名，身份证号，手机号码，IP地址，电子邮件地址信息。而非个人隐私信息是指您登录的账号、对软件的操作状态以及使用习惯等您的操作记录信息和其他一切个人隐私信息范围外的普通信息。我们将会采取合理的措施保护您的个人隐私信息，除法律或有法律赋予权限的政府部门要求或您同意等原因外，我们未经您同意不向除合作单位以外的第三方公开、
          透露您个人隐私信息。您同意，为了运营和改善我们的技术和服务，我们可以在无须再另行通知或提示您的情况下，自己收集使用或向第三方提供使用您的非个人隐私信息，以有助于我们及合作单位向用户提供更好的用户体验和提高服务质量。
        </Text>
        <Text style={styles.title}>二、用户使用须知</Text>
        <Text style={styles.text}>
          使用互联网必须遵守国家有关的政策和法律，如刑法、国家安全法、保密法、计算机信息系统安全保护条例等，保护国家利益，保护国家安全，对于违法使用互联网络而引起的一切责任，将由您负全部责任。
        </Text>
        <Text style={styles.text}>
          1、您不得使用本产品发送或传播任何妨碍社会治安或非法、虚假、骚扰性、侮辱性、恐吓性、伤害性、破坏性、挑衅性、淫秽色情性等内容的信息。
        </Text>
        <Text style={styles.text}>
          2、您不得使用本产品发送或传播敏感信息和违反国家法律制度的信息。
        </Text>
        <Text style={styles.text}>
          3、您保证以真实的身份注册使用我们的产品，向我们所提供的个人身份资料信息真实、完整、有效，依据法律规定和约定对所提供的信息承担相应的法律责任。如果资料发生变化，您应及时更改。我们会及时、有效地提供该项服务。在安全完成本协议的登记程序后，您应维持密码及账号的机密安全。您应对任何人利用您的密码及账号所进行的活动负完全的责任，我们无法对非法或未经您授权使用您账号及密码的行为做出甄别，因此本应用不承担任何责任。
        </Text>
        <Text style={styles.text}>
          4、盗取他人号码或利用网络通讯骚扰他人，均属于非法行为。您不得采用测试、欺骗等任何非法手段，盗取其他用户的账号和对他人进行骚扰。
        </Text>
        <Text style={styles.text}>
          5、本产品属于群体类产品，使用我们软件产品服务的用户之间引发的任何纠纷我们概不负责任。
        </Text>
        <Text style={styles.title}>三、服务声明</Text>
        <Text style={styles.text}>
          为了保障业务发展和调整的自主权，本应用拥有随时修改或中断服务而不需通知您的权利，我们行使修改或中断服务的权利不需对您或任何第三方负责。您必须在同意本条款的前提下，本应用才开始对您提供服务。
        </Text>
        <Text style={styles.title}>四、适用法律</Text>
        <Text style={styles.text}>
          本服务条款的解释，效力及纠纷的解决，适用于中华人民共和国大陆法律。
        </Text>
        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    paddingTop: 16,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
    color: '#333',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  footer: {
    height: 32,
  },
});
