package com.giveus.notification.dto.response;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MemberSettingInfoRes {

    private boolean fundingReview;

    private boolean usageHistory;

}
